import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [users, setUsers] = useState([]); // Initialize users as an empty array
  const [name, setName] = useState(""); // State for input name

  // Fetch users from the backend
  const fetchUsers = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/users");
      setUsers(response.data); // Set users directly from response
    } catch (error) {
      console.error("Error fetching users:", error);
      setUsers([]); // Fallback to an empty array in case of error
    }
  };

  // Add a user
  const addUser = async (e) => {
    e.preventDefault();
    if (name.trim() === "") return alert("Name cannot be empty!");

    try {
      const response = await axios.post("http://localhost:3000/api/users", {
        name,
        password: "Not generated", // Ensure password is not generated initially
      });

      const newUser = response.data; // Get the newly added user

      // Add the new user to the list of users
      setUsers((prevUsers) => [...prevUsers, newUser]);

      setName(""); // Clear input field
    } catch (error) {
      console.error("Error adding user:", error);
    }
  };

  // Generate random password for a user
  const generatePassword = async (id) => {
    try {
      const response = await axios.post(
        `http://localhost:3000/api/users/generate-password/${id}`
      );
      const updatedUser = response.data; // User with updated password

      // Ensure we update the correct user by matching the ID
      setUsers((prevUsers) =>
        prevUsers.map((user) =>
          user.id === id ? { ...user, password: updatedUser.password } : user
        )
      );
    } catch (error) {
      console.error("Error generating password:", error);
    }
  };

  // Fetch users on component mount
  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-8">User Management</h1>

      {/* User Form */}
      <form
        onSubmit={addUser}
        className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg"
      >
        <div className="mb-6">
          <label
            htmlFor="username"
            className="block text-lg font-semibold text-gray-700 mb-2"
          >
            Username
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition ease-in-out"
            placeholder="Enter username"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition duration-200"
        >
          Add User
        </button>
      </form>

      {/* User Table */}
      <div className="mt-8 overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
          <thead>
            <tr className="bg-gray-100 border-b border-gray-300">
              <th className="py-3 px-6 text-center font-semibold text-gray-700 border-r border-gray-300">
                Username
              </th>
              <th className="py-3 px-6 text-center font-semibold text-gray-700 border-r border-gray-300">
                Password
              </th>
              <th className="py-3 px-6 text-center font-semibold text-gray-700">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr
                key={user.id}
                className="border-t hover:bg-gray-50 transition duration-200"
              >
                <td className="py-3 px-6 text-gray-800 border-r border-gray-300">
                  {user.name}
                </td>
                <td className="py-3 px-6 text-gray-800 border-r border-gray-300">
                  {user.password}
                </td>
                <td className="py-3 px-6">
                  <button
                    onClick={() => generatePassword(user.id)}
                    className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition duration-200"
                  >
                    Generate Password
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
