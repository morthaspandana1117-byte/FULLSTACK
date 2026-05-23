require('dotenv').config();
const http = require('http');
const fs = require('fs');

const PORT = process.env.PORT || 3000;

async function readNotes() {
    try{
        const data = await fs.promises.readFile('notes.txt','utf-8');
        return data;   
    } catch (error) {
        return 'No notes found';
    }
}

async function addNote(newNote) {
    try {
        await fs.promises.appendFile('notes.txt', `\n${newNote}`);
        return 'New note added successfully';
    } catch (error) {
        return 'Error adding note';
    }
}

const server = http.createServer(async(req,res) => {
    res.setHeader('Content-type', 'text/plain');

    if(req.url === '/notes') {
        const notes = await readNotes();
        res.writeHead(200);
        res.end(notes);
    } else if (req.url == '/add'){
        const result = await addNote('New note added on ' + new Date().toLocaleDateString());
        res.writeHead(200);
        res.end(result);
    } else {
        res.writeHead(404);
        res.end('Page not found');
    }
});

server.listen(PORT, () => {
    console.log(`Notes server running at http://localhost:${PORT}`);
    console.log(' - GET /notes -> read all notes');
    console.log(' - GET /add -> add a new note');
});