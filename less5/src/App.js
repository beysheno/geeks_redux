import './App.css';
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import UserListPage from "./pages/userList/UserListPage";
import UserRegisterPage from "./pages/userRegister/UserRegisterPage";
import Menu from "./components/Menu";
import AboutPage from "./pages/aboutPage/AboutPage";
import CatPage from "./pages/cat/CatPage";
import JokePage from "./pages/joke/JokePage";
import AppNavBar from "./pages/navBar/NavBar";


function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <AppNavBar />
                {/*<Menu/>*/}
                {/*<Routes>*/}
                {/*    <Route index element={<UserRegisterPage/>}/>*/}
                {/*    <Route path='/users' element={<UserListPage/>}/>*/}
                {/*</Routes>*/}
                <Routes>
                    <Route path="/" element={<AboutPage />} />
                    <Route path="/cats" element={<CatPage />} />
                    <Route path="/jokes" element={<JokePage />} />
                    <Route path="/about" element={<AboutPage />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
