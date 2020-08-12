var express = require('express');
var expressInst = express();
const dotenv = require('dotenv');
dotenv.config();


const { PORT_NUMBER, NODE_ENV } = require('./config');

expressInst.listen(process.env.PORT_NUMBER , () => {
  console.log("Node js server started running!")
});

console.log('Your port number is : '+process.env.PORT_NUMBER); // undefined

console.log('Your port number is :' +process.env.PORT_NUMBER); // 3000

//using a seperate module
console.log('Your port number is : ' +PORT_NUMBER)
console.log('Node environment is: ' +NODE_ENV)