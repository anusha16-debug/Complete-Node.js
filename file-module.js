var file = require('fs');
var buf = new Buffer(1024);



//Asynchronous
file.readFile('file.txt', 'utf8', (err, fileData) => {
    if(err){
        throw err;
    } else {
        console.log(fileData)
    }
})


//Synchronous
const data = file.readFileSync('file.txt', 'utf8');
console.log(data)


//write operation, creating and writing file
//fs.writeFile(filename, data[, options], callback)

file.writeFile('write.txt', 'Node.js includes fs module to access physical file system. The fs module is responsible for all the asynchronous or synchronous file I/O operations.', 'utf8', (err) => {
    if(err){
        throw err;
    } else {
        console.log('Write operation done')
    }
});


//writing to the file which has content already overrides
file.writeFile('file.txt', 'My Name is Anusha', 'utf8', (err) => {
    if(err){
        throw err;
    } else {
        console.log()
    }
})

//appending text
//fs.appendFile(filename, data[, options], callback)
file.appendFile('file.txt', '  I work on Angular and learning Node.js', 'utf-8', (err) => {
    if(err){
        throw err
    } else {
        console.log('Append operation completed')
    }
})

//Open a file

file.open('write.txt', 'r+',  (err, data) => {
    if(err){
        throw err
    } else {
        console.log('File opened')
    } 
    console.log('Going to read file')

    file.read(data, buf, 0, buf.length, 0, (err, bytes) => {
      if(err){
          throw err
      } else {
          console.log(bytes + " bytes read")
          console.log(buf.slice(0, bytes).toString())
      }
      
    });
    file.close(data, (err) => {
        if(err){
            throw err;
        }
        else {
         console.log('file closed')
        }

    });
})


