import React from "react";
import "./App.css";
import TodoList from "./pages/TodoList";


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>WHAT'S IN YOUR LIST?</h1>
        <TodoList />
      </div>
    );
  }
}

export default App;
