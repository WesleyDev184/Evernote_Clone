import React, { Fragment, useState } from 'react';
import { Button, Field, Control, Input, Column, Section, Help, Label } from "rbx";
import { Navigate } from "react-router-dom";
import UserService from '../../../services/users';
import '../../../styles/auth.scss'

function LoginForm() {
     const [email, setEmail] = useState("");
     const [password, setPassword] = useState("");
     const [redirectToRegister, setRedirectToRegister] = useState(false);
     const [redirectToNotes, setRedirectToNotes] = useState(false);
     const [error, setError] = useState(false);

     const handleSubmit = async (evt) => {
           evt.preventDefault();
       
           try {
             const user = await UserService.login({email: email,password: password});
             setRedirectToNotes(true);
           } catch (error) {
             setError(true)
           }
        }


     if(redirectToRegister)
       return <Navigate to="/register"/>
     else if(redirectToNotes)
       return <Navigate to="/notes"/>

  return (

    <Fragment>
        <Column.Group centered>
          <form onSubmit={handleSubmit}>
            <Column size={12} className='card-form'>
              <Field className='campo'>
                <Label size="small">Email:</Label>
                <Control className='ctr'>
                  <Input
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                    name="email"
                  />
                </Control>
              </Field>
              <Field className='campo'>
                <Label size="small">Password:</Label>
                <Control className='ctr'>
                  <Input
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    required
                    name="password"
                  />
                </Control>
              </Field>
              <Field>
                <Control>
                  <Column.Group className='cols'>
                    <Column className='col'>
                      <a onClick={e => setRedirectToRegister(true)} className="button is-white has-text-danger btn-login btn">Register</a>
                    </Column>
                    <Column className='col'>
                      <Button className='button is-outlined is-danger login-nav btn-login-l btn' outlined>Login</Button>
                    </Column>
                  </Column.Group>
                </Control>
              </Field>
              { error && <Help className='help'>Email or Password invalid</Help> }
            </Column>
          </form>
        </Column.Group>
    </Fragment>
 )
}

export default LoginForm;