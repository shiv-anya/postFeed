import React from "react";
import Sidebar from "./components/Sidebar";
import Newsfeed from "./components/Newsfeed";
import classes from "./App.module.css";
function App() {
  return (
    <div className={classes.body}>
      <Sidebar />
      <Newsfeed />
    </div>
  );
}

export default App;
