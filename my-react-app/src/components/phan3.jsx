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

  // Style chung cho các ô (để không phải viết lại nhiều lần)
  const cellStyle = {
    border: "1px solid #ddd", // Đường kẻ màu xám nhạt
    padding: "10px",
    textAlign: "left"
  };

  return (
    <div style={{ padding: '20px', border: '1px solid #007bff', borderRadius: '8px' }}>
      <h2>--- Bài 2: User List Search ---</h2>
      <input 
        placeholder="Tìm tên..." 
        onChange={(e) => setSearchTerm(e.target.value)} 
        style={{ padding: '8px', marginBottom: '15px', width: '250px' }}
      />

      <div style={{ overflowX: "auto" }}> {/* Giúp bảng không bị vỡ trên mobile */}
        <table style={{ 
          width: "100%", 
          marginTop: "10px", 
          borderCollapse: "collapse" // Quan trọng: Giúp gộp các đường kẻ lại làm một
        }}>
          <thead>
            <tr style={{ backgroundColor: "#0e0c0c" }}>
              <th style={cellStyle}>Name</th>
              <th style={cellStyle}>Email</th>
              <th style={cellStyle}>Company</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map(u => (
              <tr key={u.id} style={{ transition: "0.3s" }}>
                <td style={cellStyle}>{u.name}</td>
                <td style={cellStyle}>{u.email}</td>
                <td style={cellStyle}>{u.company.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {filteredUsers.length === 0 && (
        <p style={{ color: 'red', marginTop: '10px' }}>Không tìm thấy kết quả phù hợp.</p>
      )}
    </div>
  );
}

export default UserList;