import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import {Message,Container,Card,Image,Button,Icon,Statistic} from 'semantic-ui-react'
import web3 from './web3';
import lottery from './lottery';

class App extends Component {
    //React生命周期中的通过构造函数设置组件的初始化状态
    // constructor(props){
    //     super();
    //     this.state={manager:''};
    // }
    //这里可以是采用ES6的写法，比上面更简单，但是效果是一样的(初始化数据)
    state = {
        manager:'',//管理员的账户地址
        playersCount:0,//参与人数
        balance:0,//奖池的余额
        loading:false,//投注的进度
        disabled:false,//投注按钮的状态
        showButton:'none',//开奖和退钱按钮的状态
        pickWinnerState:false,//开奖的进度
        pickWinnerDisabled:false,//开奖按钮的状态
    };
    //组件已经被渲染到页面中后触发：此时页面中有了真正的DOM的元素，可以进行DOM相关的操作
    async componentDidMount(){
        //getManager()方法的返回值是管理员用户的地址
        const address = await lottery.methods.getManager().call();
        this.setState({manager:address});

        const playersCount = await lottery.methods.getPlayersCount().call();
        this.setState({playersCount:playersCount});

        const balance = await lottery.methods.getBalance().call();
        this.setState({balance:web3.utils.fromWei(balance,'ether')});

        //errors.js:75 Uncaught (in promise) Error: invalid type (arg="type", value=" uint256")
        //主要原因：ABI复制的时候出现问题，检查一下lottery.js的abi变量的值，有可能是多了空格，换行错误啥的

        //getAccounts属于web3 eth的内部方法，不用call
        const accounts =await web3.eth.getAccounts();
        if (accounts[0]===address){
            //如果当前用户是管理员,则显示相关按钮
            this.setState({showButton:'inline'});
        }else{
            //如果不是管理员，则隐藏相关按钮
            this.setState({showButton:'none'});
        }
    }

    //投注
    enter =async ()=>{
        //点击之后，设置按钮状态
        this.setState({loading:true});
        this.setState({disabled:true});//点击投注按钮后，在投注的时候投注按钮是不可点的
        //先获取其账号
        const accounts =await web3.eth.getAccounts();
        //进行投注
        await lottery.methods.enter().send({
            from:accounts[0],
            value:'1000000000000000000'
        });
        this.setState({loading:false});
        this.setState({disabled:false});
        window.location.reload(true);//强制刷新页面
    };
    //开奖
    pickWinner = async ()=>{
        //先设置按钮状态，即显示进度（处于开奖中的状态）和按钮是否可点
        this.setState({pickWinnerState:true});
        this.setState({pickWinnerDisabled:true});
        //获取管理员用户的账户地址
        const address =await lottery.methods.getManager().call();
        //通过智能合约对象调用开奖的方法进行开奖
        await lottery.methods.pickWinner().send({
           from:address
        });
        this.setState({pickWinnerState:false});
        this.setState({pickWinnerDisabled:false});//是否不可点（false即可点）
        window.location.reload(true);//强制刷新页面
    };
  render() {
        console.log(web3.version);//打印出来的是当前的web3版本，不是浏览器的web3版本号
    return (
      <div className="App">
        <Container>
          <br/>
          <Message color='teal'>
              <b>彩票GO</b>
              <p>互联网彩票官方指定购买网站</p>
          </Message>
          <Card.Group itemsPerRow='3'>
              <Card>
                  <Image size='medium' src='/images/lottery.jpg' centered/>
                  <Card.Content>
                      <Card.Header>双色球</Card.Header>
                      <Card.Meta>
                          <b>管理员地址：</b>
                          <p>
                              {this.state.manager}
                          </p>
                      </Card.Meta>
                      <Card.Description>每周二8点准时开奖！</Card.Description>
                  </Card.Content>
                  <Card.Content extra>
                      <a>
                          <Icon name='user' />
                          共{this.state.playersCount}人参与
                      </a>
                  </Card.Content>
                  <Card.Content>
                      <Statistic.Group>
                        <Statistic color='red'>
                            <Statistic.Value>{this.state.balance}Ether</Statistic.Value>
                            <Statistic.Label>大奖池</Statistic.Label>
                        </Statistic>
                      </Statistic.Group>
                  </Card.Content>
                  <Card.Content>
                      <Statistic.Group>
                          <Statistic color='grey'>
                              <Statistic.Value>第13期</Statistic.Value>
                              <Statistic.Label>期数</Statistic.Label>
                          </Statistic>
                      </Statistic.Group>
                  </Card.Content>
                  <Card.Content>
                      <Button animated='fade' onClick={this.enter} loading={this.state.loading} disabled={this.state.disabled}>
                          <Button.Content visible>想一夜暴富吗？点我</Button.Content>
                          <Button.Content hidden>投注走上人生巅峰！</Button.Content>
                      </Button>
                  </Card.Content>
                  <Button color='red' style={{display:this.state.showButton}} onClick={this.pickWinner} loading={this.state.pickWinnerState} disabled={this.state.pickWinnerDisabled}>开奖</Button>
                  <Button color='grey' style={{display:this.state.showButton}}>退钱</Button>
              </Card>
          </Card.Group>
        </Container>
      </div>
    );
  }
}

export default App;
