import Web3 from 'web3'; //这里的web3表示package.json中的1.0.0-beta.37的web3，即node_modules中的文件，Web3表示构造方法
const web3 = new Web3(window.web3.currentProvider);//把浏览器中的web3版本（可能是0.2版本）的电话卡插入到这里1.0.0-beta.37的web3中
export default web3;//将web3暴露，供其他文件引用