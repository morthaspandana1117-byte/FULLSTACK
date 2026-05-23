const fs = require('fs');

fs.readFile('hello.txt','utf-8',(err,data) => {
    if(err){
        console.log(err);
        return;
    }
    console.log(data);
});

// Event Loop
// Because file reading takes time.
// Node sends file task to background and continues executing next lines.
// This happens because of Event Loop in Node.js, which allows it to handle asynchronous operations efficiently.

// Simple flow:
// Code runs
// Async task goes to background
// Task finishes
// Callback returns
// Event loop executes callback
// Think like:
// “Do this later when ready.”