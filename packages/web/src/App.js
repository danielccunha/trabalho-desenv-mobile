import React, { useState, useEffect } from "react";

import api from "./services/api";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      const { data } = await api.get("/users");
      setUsers(data);
    }

    fetchUsers();
  }, []);

  return (
    <div className="App">
      <h4>Listagem de usuários</h4>
      <table>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
