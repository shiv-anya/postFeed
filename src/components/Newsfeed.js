import classes from "./Newsfeed.module.css";
import { useEffect } from "react";
import { useState } from "react";
import Posts from "./Posts";

const Newsfeed = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(
        " https://jsonplaceholder.typicode.com/posts"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch");
      }
      const responseData = await response.json();
      const loadedPosts = [];
      for (let key in responseData) {
        loadedPosts.push({
          id: responseData[key].id,
          userId: responseData[key].userId,
          title: responseData[key].title,
          body: responseData[key].body,
        });
      }
      setPosts(loadedPosts);
      setIsLoading(false);
    };
    fetchPosts().catch((error) => {
      setIsLoading(false);
      alert("error");
    });
  });
  const postList = posts.map((post) => (
    <li>
      <Posts
        title={post.title}
        body={post.body}
        id={post.id}
        key={post.userId}
      />
    </li>
  ));
  return (
    <div className={classes.newsfeed}>
      {isLoading && <p>Loading...</p>}
      {!isLoading && <ul>{postList}</ul>}
    </div>
  );
};

export default Newsfeed;
