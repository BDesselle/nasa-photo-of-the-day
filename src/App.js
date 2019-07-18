import React from "react";
import "./App.css";
import APODContainer from './components/APODContainer/APODContainer';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';

function App() {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <APODContainer />
    </div>
  );
}

export default App;
