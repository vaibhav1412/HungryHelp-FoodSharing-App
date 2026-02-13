import { createContext, useState } from "react";

export const FeedContext = createContext();

export const FeedProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [scores, setScores] = useState({});

  const increaseScore = (email) => {
    setScores((prev) => ({
      ...prev,
      [email]: (prev[email] || 0) + 10
    }));
  };

  const addPost = (post) => {
    setPosts((prev) => [...prev, post]);
  };

  const updatePost = (id, updatedData) => {
    setPosts((prev) =>
      prev.map((p) => {
        if (p.id === id) {
          const updatedPost = { ...p, ...updatedData };

          if (updatedData.status === "completed") {
            increaseScore(p.reporter);
            increaseScore(p.donor);
            increaseScore(updatedData.volunteer);
          }

          return updatedPost;
        }
        return p;
      })
    );
  };

  return (
    <FeedContext.Provider
      value={{ posts, addPost, updatePost, scores }}
    >
      {children}
    </FeedContext.Provider>
  );
};
