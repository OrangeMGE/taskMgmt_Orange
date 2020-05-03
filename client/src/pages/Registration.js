import React , { Component, useState } from 'react';
import styles from './Registration.css';
import { useHttp } from '../hooks/http.hook';

export const Registration = () => {
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
      const data = await request('/api/auth/register', 'POST', {...form})
      console.log('Data', data);
    } catch(e) {
      
    }
  }

    return(
      <div className="parrent">
        <h1 className="title">Task Manager</h1>
        
        <div className="box">
          <h1> Login </h1>
          <input type='text' id='username' name='' placeholder='Username' onChange={changeHandler} />
          <input type='password' id='password' name='' placeholder='Password' onChange={changeHandler} />
          
          <input type='submit' name='' value='Login' disabled={loading}/>
          <input type='submit' name='' value='Registration' onClick={registerHandler} disabled={loading}/>
        </div>
        <div className="by">
          <h2> By Orange </h2>
        </div>
      </div>
    )
}