import React from 'react';
import {createGlobalStyle} from "styled-components";
// import Membership from "./components/Membership";
import ToDoList from "./components/ToDoList";

const GlobalStyle = createGlobalStyle`
`;
function App() {
  return (
    <div className="App">
        <GlobalStyle />
        {/*<Membership />*/}
        <ToDoList />
    </div>
  );
}

export default App;
