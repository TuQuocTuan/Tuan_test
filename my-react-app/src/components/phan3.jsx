import { useState, useEffect } from "react";

function UserList() {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const apiUrl = import.meta.env.VITE_API_URL_USERS; 
    fetch(apiUrl || "https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  const filteredUsers = users.filter(u => 
    u.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ padding: '20px', border: '1px solid #007bff' }}>
      <h2>--- Bài 2: User List Search ---</h2>
      <input 
        placeholder="Tìm tên..." 
        onChange={(e) => setSearchTerm(e.target.value)} 
      />
      <table style={{ width: "100%", marginTop: "10px" }}>
        <thead>
          <tr><th>Name</th><th>Email</th><th>Company</th></tr>
        </thead>
        <tbody>
          {filteredUsers.map(u => (
            <tr key={u.id}>
              <td>{u.name}</td>
              <td>{u.email}</td>
              <td>{u.company.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserList;