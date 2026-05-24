let notes=[];
let nextId = 1;

exports.getAllNotes = (req,res) => {
    res.json(notes);
};

exports.createNote = (req,res) =>{
    const {title, content} = req.body;

    if(!title) {
        return res.status(400).json({message: 'Title is required'});
    }
    const note = {
        id: nextId++,
        title,
        content,
        createdAt: new Date().toISOString(),
    }

    notes.push(note);
    
    res.status(201).json(note);
};