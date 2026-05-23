require('dotenv').config();
const express = require('express');
const cors = require('cors');
const booksRouter = require('./routes/books');

const app = express();
const PORT = process.env.PORT || 3000;
 
// MIDDLE WARE - a function that runs b/w the request coming in and your route handler running. (Series of checckpoints)

app.use(express.json());
app.use((req,res,next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next(); // IMP: call next() to move to the next step
});
app.use(cors()); // Allow all origns to access the API
//app.use(cors({origin : 'http://localhost:5173'})); // Allow only this origin to acces the API

app.use('/books',booksRouter); //Mount the router - all routes in books.js are now at /books

// 404 + error handlers (at the bottom)
app.use((req,res) => {
    res.status(404).json({message: `Route ${req.url} not found`});
});

app.use((err,req,res,next) => {
    console.error(err.stack);
    res.status(500).json({message: 'Internal Server Error', error: err.message});
});

app.listen (PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});