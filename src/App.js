import React from "react";
import {Container} from '@material-ui/core';
import NavBar from "./components/Navbar/Navbar";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";
import Nutrition from "./components/Nutrition/Nutrition"
import {GoogleOAuthProvider} from '@react-oauth/google';

const App = () =>{
    return(
        <GoogleOAuthProvider clientId="541466914599-ago84c2a71bd9ajen87ja60n1k7jt1bd.apps.googleusercontent.com">
        <BrowserRouter>
        <Container maxWidth="lg">
            <NavBar/>
            <Routes>
                <Route path="/Exercises"  element={<Home/>}/>
                <Route path="/Nutrition"  element={<Nutrition/>}/>
                <Route path="/Auth"  element={<Auth/>}/>
            </Routes>
            
        </Container>
        </BrowserRouter>
        </GoogleOAuthProvider>
        
        
    )
}

export default App;