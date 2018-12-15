//编译智能合约的脚本
const path = require('path'); //获取path模块
const fs = require('fs'); //获取文件系统模块
const solc = require('solc'); //获取solc模块

//获取文件的路径，_dirname表示工程目录
const srcpath = path.resolve(__dirname,'contracts','Lottery.sol');
//通过文件系统同步读取文件
const source = fs.readFileSync(srcpath,'utf-8');
//利用solidity编译器（solc）编译智能合约,'1'是一个占位符
const result = solc.compile(source,1);
//console.log(result);
/*
导出对象用module.exports,导出多个方法和变量用exports
result是一个JSON对象，contracts是result这个JSON对象中的一个key,':Inbox'是contracts中的一个key，
这里相当于把':Inbox'中的value值导出来
 */
module.exports = result.contracts[':Lottery'];
//console.log(module.exports);
