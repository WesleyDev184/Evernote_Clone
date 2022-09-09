import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import HomeScreen from './screens/home';
import NotesScreen from './screens/notes/index';
import LoginScreen from './screens/auth/login';
import RegisterScreen from './screens/auth/register';
import UserEditScreen from './screens/users/edit';

const Rotas = () => (
    <BrowserRouter>
        <Routes>
            <Route exact path='/' element={<HomeScreen/>} />
            <Route exact path='/notes' element={<NotesScreen/>} />
            <Route exact path='/login' element={<LoginScreen/>} />
            <Route exact path='/register' element={<RegisterScreen/>} />
            <Route exact path='/users/edit' element={<UserEditScreen/>} />
        </Routes>
    </BrowserRouter>
)

export default Rotas;