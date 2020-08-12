var os = require("os");

// Endianness
console.log('endianness : ' + os.endianness());

// OS type
console.log('type : ' + os.type());

// OS platform
console.log('platform : ' + os.platform());

// Total system memory
console.log('total memory : ' + os.totalmem() + " bytes.");

// Total free memory
console.log('free memory : ' + os.freemem() + " bytes.");

//host name
console.log('Host Name :' + os.hostname());

//operating system architecture
console.log('OS CPU architecture:' + os.arch())

//Network Interface
console.log('Network Interfaces:' + os.networkInterfaces())