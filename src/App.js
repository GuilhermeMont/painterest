import React from 'react';
import logo from './logo.svg';
import './App.css';
import Searchbar from './components/Searchbar/Searchbar'
import MainPage from "./Containers/MainPage/MainPage";

function App() {
  return (
      <div>
        <Searchbar/>
        <MainPage/>
      </div>
  );
}

export default App;
