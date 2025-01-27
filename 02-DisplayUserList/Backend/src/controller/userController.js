let users = [];

const getUsers = (req, res) => {
  res.json(users);
};

const addUser = (req, res) => {
  const { name } = req.body;
  // console.log(req.body);
  
  if (!name) {
    return res.status(400).json({ error: 'Name is required' });
  }
  try {
    const newUser = {
      id: users.length + 1,
      name,
      password: null,
      passwordGenerated: false,
    };
    users.push(newUser);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: 'An unexpected error occurred' });
  }
};

const generatePassword = (req, res) => {
  const { id } = req.params;
  const user = users.find((u) => u.id === parseInt(id));

  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }
  if (user.passwordGenerated) {
    return res.status(400).json({ error: 'Password already generated' });
  }

  try {
    user.password = Math.random().toString(36).slice(-8); // Generate random password
    user.passwordGenerated = true;
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: 'An unexpected error occurred' });
  }
};

export { getUsers, addUser, generatePassword };
