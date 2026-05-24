let tasks = [];
let nextId = 1;

// GET /tasks
exports.getAllTasks = (req, res) => {
  const { completed } = req.query;

  let result = tasks;

  if (completed !== undefined) {
    const isDone = completed === 'true';

    result = tasks.filter(
      (t) => t.completed === isDone
    );
  }

  res.json(result);
};

// GET /tasks/:id
exports.getTask = (req, res) => {
  const task = tasks.find(
    (t) => t.id === parseInt(req.params.id)
  );

  if (!task) {
    return res.status(404).json({
      message: 'Task not found',
    });
  }

  res.json(task);
};

// POST /tasks
exports.createTask = (req, res) => {
  const { title, description } = req.body;

  if (!title) {
    return res.status(400).json({
      message: 'title is required',
    });
  }

  const task = {
    id: nextId++,
    title,
    description: description || '',
    completed: false,
    createdAt: new Date().toISOString(),
  };

  tasks.push(task);

  res.status(201).json(task);
};

// PUT /tasks/:id
exports.updateTask = (req, res) => {
  const idx = tasks.findIndex(
    (t) => t.id === parseInt(req.params.id)
  );

  if (idx === -1) {
    return res.status(404).json({
      message: 'Task not found',
    });
  }

  tasks[idx] = {
    ...tasks[idx],
    ...req.body,
    id: tasks[idx].id,
  };

  res.json(tasks[idx]);
};

exports.toggleTask = (req,res) =>{
  const task = tasks.find((t) => t.id = parseInt(req.params.id));

  if(!task){
    return res.status(404).json({message: 'Task not found'});
  }

  task.completed = !task.completed;

  res.json(task);
}

exports.taskstats = (req,res) => {
  const total = tasks.length;

  const completed = tasks.filter((t) => t.completed).length;
  
  const pending = total - completed;

  res.json({
    total,
    completed,
    pending,
  });
}

// DELETE /tasks/:id
exports.deleteTask = (req, res) => {
  const id = parseInt(req.params.id);

  const exists = tasks.some(
    (t) => t.id === id
  );

  if (!exists) {
    return res.status(404).json({
      message: 'Task not found',
    });
  }

  tasks = tasks.filter(
    (t) => t.id !== id
  );

  res.json({
    message: 'Task deleted successfully',
  });
};