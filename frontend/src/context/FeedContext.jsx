import { createContext, useState, useEffect } from "react";

export const FeedContext = createContext();

export const FeedProvider = ({ children }) => {
  const [posts, setPosts] = useState(() => {
    return JSON.parse(localStorage.getItem("posts")) || [];
  });

  const [points, setPoints] = useState(() => {
    return JSON.parse(localStorage.getItem("points")) || {};
  });

  useEffect(() => {
    localStorage.setItem("posts", JSON.stringify(posts));
  }, [posts]);

  useEffect(() => {
    localStorage.setItem("points", JSON.stringify(points));
  }, [points]);

  const addPost = (post) => {
    setPosts((prev) => [post, ...prev]);
  };

  const updatePost = (id, updatedData) => {
    setPosts((prev) =>
      prev.map((p) => {
        if (p.id === id) {
          const updated = {
            ...p,
            ...updatedData,
            updatedAt: new Date().toISOString()
          };

          if (updatedData.status === "COMPLETED") {
            increasePoints(p.reporter);
            if (p.donor) increasePoints(p.donor);
            if (p.volunteer) increasePoints(p.volunteer);
          }

          return updated;
        }
        return p;
      })
    );
  };

  const increasePoints = (email) => {
    setPoints((prev) => ({
      ...prev,
      [email]: (prev[email] || 0) + 10
    }));
  };

  return (
    <FeedContext.Provider
      value={{ posts, addPost, updatePost, points }}
    >
      {children}
    </FeedContext.Provider>
  );
};
