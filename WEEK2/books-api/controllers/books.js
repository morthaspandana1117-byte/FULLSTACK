let books = [
  { id: 1, title: 'The Pragmatic Programmer', author: 'Hunt & Thomas' },
  { id: 2, title: 'Clean Code', author: 'Robert C. Martin' },
];

let nextId = 3;

// GET /books
exports.getAllBooks = (req, res) => {
  res.json(books);
};

// GET /books/:id
exports.getBook = (req, res) => {
  const book = books.find((b) => b.id === parseInt(req.params.id));

  if (!book) {
    return res.status(404).json({ message: 'Not found' });
  }
  res.json(book);
};

// POST /books
exports.createBook = (req, res) => {
  const { title, author } = req.body;

  if (!title || !author) {
    return res.status(400).json({ message: 'Fields required' });
  }

  const book = {
    id: nextId++,
    title,
    author,
  };

  books.push(book);

  res.status(201).json(book);
};

// PUT /books/:id
exports.updateBook = (req, res) => {
  const idx = books.findIndex(
    (b) => b.id === parseInt(req.params.id)
  );

  if (idx === -1) {
    return res.status(404).json({ message: 'Not found' });
  }

  books[idx] = {
    id: parseInt(req.params.id),
    ...req.body,
  };

  res.json(books[idx]);
};

// DELETE /books/:id
exports.deleteBook = (req, res) => {
  books = books.filter(
    (b) => b.id !== parseInt(req.params.id)
  );

  res.json({ message: 'Deleted' });
};