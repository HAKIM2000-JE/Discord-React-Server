import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import Sidebar from "./Sidebar"
import Chat from "./Chat"


function App() {
  return (
      //BEM  naming convention
    <div className="app">
   

      <Sidebar />
      <Chat />
        {/*Sidebar*/}
    </div>
  );
}

export default App;
