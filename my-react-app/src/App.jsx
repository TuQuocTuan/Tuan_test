import UserList from "./components/phan2";
import Blog from "./components/phan3";

function App() {
  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
      <h1 style={{ textAlign: 'center' }}>Project Tổng Hợp - Tuan</h1>
      
      <UserList />

      <hr style={{ margin: '50px 0' }} />

      <Blog />
    </div>
  );
}

export default App;