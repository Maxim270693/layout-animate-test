import React from 'react';
import LogoBlock from "./components/LogoBlock";
import Navigate from "./components/Navigate/Navigate";
import Header from "./components/Header/Header";

import './App.scss';

function App() {
  return (
    <div className="App">
        <LogoBlock/>
        <div className="container">
            <Navigate/>
            <Header/>
        </div>
    </div>
  );
}

export default App;
