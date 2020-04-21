import React, { useState, useEffect } from "react";
import axios from "axios";

function DataFetching() {
  const [post, setPost] = useState(1);
  const [id, setId] = useState(1);
  const [idFromButtonClick, setIdFromButtonClick] = useState(1);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/post.${id}`)
      .then((res) => {
        console.log(res);
        setPost(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [idFromButtonClick]);

  const hanldeClick = () => {
    setIdFromButtonClick(id);
  };

  return (
    <div>
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      <button type="text" onClick={hanldeClick}>
        Post
      </button>
      <div>{post.title}</div>
      {/* <ul>
                    {posts.map(post => (
                        <li key={post.id}>{post.title}</li>
                    ))}
                </ul> */}
    </div>
  );
}

export default DataFetching;
