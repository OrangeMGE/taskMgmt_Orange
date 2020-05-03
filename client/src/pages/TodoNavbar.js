import React , { Component, useContext } from 'react';
import {useHistory, NavLink} from 'react-router-dom'
import {AuthContext} from '../context/auth.context.js'
import styles from './Todo.css';


export const TodoNavbar = () => {
    const history = useHistory();
    const auth = useContext(AuthContext)


    const logoutHandler = event => {
        event.preventDefault()
        auth.logout()
        history.push('/')
    }


    const createList = () => {
        console.log( JSON.parse(localStorage.getItem('userData')).userId )
        console.log('Отработало создание листа')
    }

        return(
            <div className= "headerMain" >
                <header className = "headerNav"> 
                    <h1> ITracers task-manager</h1>
                    <input className="returnButton" type="button" value="Create List" onClick={createList}></input>
                    <input className="returnButton" type="button" value="Exit" onClick={logoutHandler}></input>
                </header>
                <main className="main">

                </main>
            </div>
        )
}
