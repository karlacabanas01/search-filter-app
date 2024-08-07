import React from "react";
import "./App.css";
import FilteredList from "./FilteredList";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Search Filter App</h1>
      </header>
      <FilteredList />
    </div>
  );
};

export default App;
