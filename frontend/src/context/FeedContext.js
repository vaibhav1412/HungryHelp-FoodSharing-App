import { createContext, useState, useEffect } from "react";

export const FeedContext = createContext();

export const FeedProvider = ({ children }) => {
  const [posts, setPosts] = useState(() => {
    const saved = localStorage.getItem("posts");
    return saved ? JSON.parse(saved) : [];
  });

  const [points, setPoints] = useState(() => {
    const saved = localStorage.getItem("points");
    return saved ? JSON.parse(saved) : {};
  });

  useEffect(() => {
    localStorage.setItem("posts", JSON.stringify(posts));
  }, [posts]);

  useEffect(() => {
    localStorage.setItem("points", JSON.stringify(points));
  }, [points]);

  const increasePoints = (email) => {
    setPoints((prev) => ({
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
          const updated = { ...p, ...updatedData };

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

  return (
    <FeedContext.Provider
      value={{ posts, addPost, updatePost, points }}
    >
      {children}
    </FeedContext.Provider>
  );
};
 