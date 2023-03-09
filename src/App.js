import './App.css';
import React, {useEffect} from "react";
import {useTelegram} from "./hooks/useTelegram";
// import Header from "./components/Header/Header";
// import {Route, Routes} from 'react-router-dom'

// const tg = window.Telegram.WebApp

function App() {
    const {onToggleButton, tg} = useTelegram();
    //
    useEffect(() => {
        tg.ready();
    }, [])

    return (
        <div className="App">
            <button onClick={onToggleButton}>toggle</button>
        </div>
    );
}
export default App;
