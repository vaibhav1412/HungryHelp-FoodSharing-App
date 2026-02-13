import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FeedProvider } from "./context/FeedContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <FeedProvider>
      <App />
    </FeedProvider>
  </React.StrictMode>
);
