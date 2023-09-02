import React from 'react';
import {createGlobalStyle} from "styled-components";
import ToDoList from "./ToDoList";

const GlobalStyle = createGlobalStyle`
`;
function App() {
  return (
    <div className="App">
        <GlobalStyle />
        <ToDoList />
    </div>
  );
}

export default App;
