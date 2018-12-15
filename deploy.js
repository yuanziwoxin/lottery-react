//部署智能合约的脚本
const Web3 = require('web3');
const {interface,bytecode} = require('./compile');
var HDwalletProvider = require("truffle-hdwallet-provider");
var mnemonic = "ketchup divorce chief dutch inside found section myself grace pen cover half";
var provider = new HDwalletProvider(mnemonic,"https://rinkeby.infura.io/v3/7d3e4b26c9c54418858fd4f721c5ac8b");

const web3 = new Web3(provider);

deploy = async() =>{
    const accounts = await web3.eth.getAccounts();
    console.log(accounts[0]);
    const result = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({
            data:'0x'+bytecode,
            arguments: ['Hello,Lottery test!']
        }).send({
           from:accounts[0],
           gas:3000000
        });
    console.log('Address: '+result.options.address);
    console.log(interface);
};

deploy();