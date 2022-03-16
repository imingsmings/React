import React from "react";
import NewsList from "./components/NewsList";
import strings from "./data";
import "./App.css";

function App() {
  return (
    <>
      <NewsList newsList={strings} />
    </>
  );
}

export default App;
