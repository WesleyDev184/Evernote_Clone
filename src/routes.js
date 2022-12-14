import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import HomeScreen from './screens/home';
import LoginScreen from './screens/auth/login';
import RegisterScreen from './screens/auth/register';
import NotesIndexScreen from './screens/notes/index';
import UsersEditScreen from './screens/users/edit';

import PrivateRoute from './components/auth/private_router';


const Rotas = () =>(
    <BrowserRouter>
        <Routes>
            <Route exact path='/' element={<HomeScreen/>} />
            <Route exact path='/login' element={<LoginScreen/>}/>
            <Route exact path='/register' element={<RegisterScreen/>}/>
            <Route element={<PrivateRoute />} >
                <Route exact path='/notes' element={<NotesIndexScreen/>} />
                <Route exact path='/users/edit' element={<UsersEditScreen/>}/>
            </Route>
            
        </Routes>
    </BrowserRouter>
)   
export default Rotas;