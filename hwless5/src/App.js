import './App.css';
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import AboutPage from "./page/aboutPage/AboutPage";
import AnimeQuotes from "./components/AnimeQuotes";
import Quotes from "./components/Quotes";
import HPChars from "./components/HPChars";
import AppNavBar from "./page/appNavBar/appNavBar";
import Posts from "./components/Posts";
import Pokemons from "./components/Pokemons";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <AppNavBar />
                <Routes>
                    <Route path='/' element={<AboutPage />} />
                    <Route path='/anime' element={<AnimeQuotes />} />
                    <Route path='/quotes' element={<Quotes />} />
                    <Route path='/chars' element={<HPChars/>} />
                    <Route path='/post' element={<Posts/>} />
                    <Route path='/pokemons' element={<Pokemons />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
