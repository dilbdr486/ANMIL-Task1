// Simulated in-memory "database"
let todos = [];

const addTodo = (req, res) => {
  try {
    const { task } = req.body;

    // Validate if task is provided
    if (!task) {
      return res.status(400).json({ message: "Task is required" });
    }

    // Create a new "Todo" object
    const newTodo = {
      id: todos.length + 1, // Generate a simple ID
      task,
      createdAt: new Date(),
    };

    // Add the new "Todo" to the in-memory array
    todos.push(newTodo);

    // Send success response
    res.status(201).json({ message: "Todo added successfully", todo: newTodo });
  } catch (error) {
    console.error("Error adding todo:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export { addTodo };
