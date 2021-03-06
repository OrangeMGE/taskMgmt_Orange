import React , { Component, useState, useContext } from 'react';
import styles from './Registration.css';
import { useHttp } from '../hooks/http.hook';
import { AuthContext } from '../context/auth.context';

export const Registration = () => {
  const auth = useContext(AuthContext)
  const {loading, error, request} = useHttp()
  const [form, setForm] = useState({
    username: '',
    password: ''
  });

  const changeHandler = event => {
    setForm({ ...form, [event.target.name]: event.target.value })
  }

  const registerHandler = async () => {
    try {
      console.log(form)
      const data = await request('/api/auth/register', 'POST', {...form})
      console.log(data.message);
    } catch(e) {
      
    }
  }

  const loginHandler = async () => {
    try {
      console.log(form)
      const data = await request('/api/auth/login', 'POST', {...form})
      auth.login(data.token, data.userId)
    } catch(e) {
      
    }
  }

    return(
      <div className="parrent">
        <div className="box">
          <h1> Login </h1>
          <input type='text' id='username' name='username' placeholder='Username' />
          <input type='password' id='password' name='password' placeholder='Password'  />
          
          <input type='submit' name='' value='Войти' />
          <input type='submit' name='' value='Зарегистрироваться' />
        </div>
        <footer>
          By Vilatiy Volkov
          By Alexandra Paxolkina
          By Ekaterina Trochenko
        </footer>
      </div>
    
    )
}