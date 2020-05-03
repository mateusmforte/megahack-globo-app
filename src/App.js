import React from "react";
import "./App.scss";
import Navigation from "./components/navigation/Navigation";
import Feed from "./pages/feed/Feed";

function App() {
  return (
    <div className="App">
      <Feed />
      <Navigation />
    </div>
  );
}

export default App;
