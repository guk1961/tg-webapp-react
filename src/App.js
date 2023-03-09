import './App.css';
import React, {useEffect} from "react";
//import {useTelegram} from "./hooks/useTelegram";
// import Header from "./components/Header/Header";
// import {Route, Routes} from 'react-router-dom'

const tg = window.Telegram.WebApp

function App() {
    // const {onToggleButton, tg} = useTelegram();
    //
    useEffect(() => {
        tg.ready();
    }, [])
    const onClose = () => {
        tg.close()
    }

    return (
        <div className="App">
            work
            <button onClick={onClose}>Закрыть</button>
        </div>
    );
}
export default App;
