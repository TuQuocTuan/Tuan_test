import { useState, useEffect } from "react";

function Blog() {
  const [posts, setPosts] = useState([]);
  const [limit, setLimit] = useState(10);

  useEffect(() => {
    const apiUrl = import.meta.env.VITE_API_URL;
    if (apiUrl) {
      fetch(apiUrl)
        .then((res) => res.json())
        .then((data) => setPosts(data))
        .catch((err) => console.error("Lỗi khi fetch: ", err));
    }
  },[]);

  const handleLoadmore = () => {
    setLimit(limit + 10);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>My Blog Posts</h1>
      <hr />

      {posts.slice(0, limit).map((post, index) => (
        <div key={post.id} style={{ marginBottom: '15px' }}>
          <h3>{index + 1}. {post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}

      {limit < posts.length && (
        <button
          onClick={handleLoadmore}
          style={{ marginTop: '20px', padding: '10px 20px', cursor: 'pointer' }}
        >
          Load More (Hiện thêm 10 bài)
        </button>
      )}

      {limit >= posts.length && posts.length > 0 && (
        <p style={{ color: 'gray' }}>Bạn đã xem hết tất cả bài viết!</p>
      )}
    </div>
  );
}

export default Blog;