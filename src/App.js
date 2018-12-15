import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Message,Container,Card,Image,Button,Icon,Statistic,StatisticGroup} from 'semantic-ui-react'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Container>
          <br/>
          <Message color='teal'>
              <b>彩票GO</b>
              <p>互联网彩票官方指定购买网站</p>
          </Message>
          <Card.Group>
              <Card>
                  <Image src='/images/lottery.jpg' />
                  <Card.Content>
                      <Card.Header>双色球</Card.Header>
                      <Card.Meta><b>管理员地址：</b>Ox4541ea54c54b34</Card.Meta>
                      <Card.Description>每周二8点准时开奖！</Card.Description>
                  </Card.Content>
                  <Card.Content extra>
                      <a>
                          <Icon name='user' />
                          共10人参与
                      </a>
                  </Card.Content>
                  <Card.Content>
                      <Statistic.Group>
                        <Statistic color='red'>
                            <Statistic.Value>99 Ether</Statistic.Value>
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
                      <Button animated='fade'>
                          <Button.Content visible>想一夜暴富吗？点我</Button.Content>
                          <Button.Content hidden>投注走上人生巅峰！</Button.Content>
                      </Button>
                  </Card.Content>
                  <Button color='brown' style={{display:"none"}}>开奖</Button>
                  <Button color='brown' style={{display:"none"}}>退钱</Button>
              </Card>
              <Card>
                  <Image src='/images/lottery.jpg' />
                  <Card.Content>
                      <Card.Header>双色球</Card.Header>
                      <Card.Meta><b>管理员地址：</b>Ox4541ea54c54b34</Card.Meta>
                      <Card.Description>每周二8点准时开奖！</Card.Description>
                  </Card.Content>
                  <Card.Content extra>
                      <a>
                          <Icon name='user' />
                          共10人参与
                      </a>
                  </Card.Content>
                  <Card.Content>
                      <Statistic.Group>
                          <Statistic color='red'>
                              <Statistic.Value>99 Ether</Statistic.Value>
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
                      <Button animated='fade'>
                          <Button.Content visible>想一夜暴富吗？点我</Button.Content>
                          <Button.Content hidden>投注走上人生巅峰！</Button.Content>
                      </Button>
                  </Card.Content>
                  <Button color='brown' style={{display:"none"}}>开奖</Button>
                  <Button color='brown' style={{display:"none"}}>退钱</Button>
              </Card>
              <Card>
                  <Image src='/images/lottery.jpg' />
                  <Card.Content>
                      <Card.Header>双色球</Card.Header>
                      <Card.Meta><b>管理员地址：</b>Ox4541ea54c54b34</Card.Meta>
                      <Card.Description>每周二8点准时开奖！</Card.Description>
                  </Card.Content>
                  <Card.Content extra>
                      <a>
                          <Icon name='user' />
                          共10人参与
                      </a>
                  </Card.Content>
                  <Card.Content>
                      <Statistic.Group>
                          <Statistic color='red'>
                              <Statistic.Value>99 Ether</Statistic.Value>
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
                      <Button animated='fade'>
                          <Button.Content visible>想一夜暴富吗？点我</Button.Content>
                          <Button.Content hidden>投注走上人生巅峰！</Button.Content>
                      </Button>
                  </Card.Content>
                  <Button color='brown' style={{display:"none"}}>开奖</Button>
                  <Button color='brown' style={{display:"none"}}>退钱</Button>
              </Card>
          </Card.Group>
        </Container>
      </div>
    );
  }
}

export default App;
