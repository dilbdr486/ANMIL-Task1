import { Todo } from "../model/todoModel.js";

const addTodo = async (req, res) => {
  try {
    const { task } = req.body; // Destructure task from req.body
    console.log(req.body);

    if (!task) { // Check if task is missing
      throw new Error("Task is required");
    }

    const todos = new Todo({
      task,
    });
    await todos.save();

    res.status(201).json({ success: true, message: "Task added successfully" }); // Success response
  } catch (error) {
    console.error(error);
    res.status(400).json({ success: false, message: error.message }); // Error response
  }
};

const getTodoById = async(req,res)=>{
  try {
    const todo = await Todo.findById(req.params.id);
    if (!todo) {
        return res.status(404).json({ message: 'Todo not found' });
    }
    res.status(200).json(todo);
} catch (error) {
    res.status(500).json({ message: 'Error retrieving todo', error: error.message });
}
}

const getTodos = async(req,res)=>{
  try {
    const todos = await Todo.find();
    res.status(200).json(todos);
} catch (error) {
    res.status(500).json({ message: 'Error retrieving todos', error: error.message });
}
}

const updateTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const { task } = req.body;

    const todo = await Todo.findByIdAndUpdate(id, { task }, { new: true });

    if (!todo) {
      return res.status(404).json({ message: 'Todo not found' });
    }

    res.status(200).json({ success: true, message: 'Todo updated successfully', todo });
  } catch (error) {
    res.status(500).json({ message: 'Error updating todo', error: error.message });
  }
};

const deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;

    const todo = await Todo.findByIdAndDelete(id);

    if (!todo) {
      return res.status(404).json({ message: 'Todo not found' });
    }

    res.status(200).json({ success: true, message: 'Todo deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting todo', error: error.message });
  }
};

export { addTodo,getTodoById,getTodos,updateTodo,deleteTodo };
