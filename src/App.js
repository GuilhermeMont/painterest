import React from 'react';
import logo from './assets/Painterest-Logo.svg';
import classes from './App.module.css';
import Searchbar from './components/Header/Searchbar/Searchbar'
import MainPage from "./Containers/MainPage/MainPage";
import HeaderIcons from './components/Header/HeaderIcons/HeaderIcons'
import Links from  "./components/Header/Links/Links"

function App() {
    return (
        <div>
            <div className={classes.Header}>
                <img src={logo} alt='Site logo' className={classes.Logo}/>
                <Searchbar/>
                <Links/>
                <HeaderIcons/>
            </div>
            <MainPage/>
        </div>
    );
}

export default App;
