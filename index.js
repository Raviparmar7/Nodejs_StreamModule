// What is Streams:-
// Streams are object that let you read data from a source 
// and write data from the destination in continuous fashion.

// There are manily 4 types of streams:-

// 1 Readable:- Used to read operation.
// 2 Writable:- Used to write operation.
// 3 Duplex:- Used for both read and write data.
// 4 Transfrom:- A type of duplex.

// more commonly used event are:-

// 1 data:- This event is fired when data is avaiable to read.
// 2 end :- This event is fired when no more data is avaiable to read.
// 3 error:- This event is fired when there is any error receving or writing data.
// 4 finish:- This event is fired when all data has flushed.

// create a stream

const fs = require("fs");

const http = require("http");
const server = http.createServer();

server.on("request", (req, res)=> {
    fs.readFile("input.txt", (err, data) =>
    {
        if (err) return console.log(err);
        res.end(data.toString());
    });
    
});

server.listen(8000, "127.0.0.1");
