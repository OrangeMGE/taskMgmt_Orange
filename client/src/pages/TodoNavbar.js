import React , { Component, useContext } from 'react';
import {useHistory, NavLink} from 'react-router-dom'
import {AuthContext} from '../context/auth.context.js'
import styles from './Todo.css';
import styless from './Registration.css';


export const TodoNavbar = () => {
    const history = useHistory();
    const auth = useContext(AuthContext)
    let isCreateWindow = false;

    const logoutHandler = event => {
        event.preventDefault()
        auth.logout()
        history.push('/')
    }


    const createWindow = <div className="main">       
                            <div className="box">
                            <h1> Создание новой задачи </h1>
                                <input type='text' id='nametask' name='nametask' />
                                <input type='text' id='descriptiontask' name='descriptiontask' />
                            </div>
                        </div>;


    const createList = () => {
        console.log('Отработало создание листа')
    }

        return(
            <div className= "headerMain" >
                <header className = "headerNav"> 
                    <h1> ITracers task-manager</h1>
                    <input className="returnButton" type="button" value="Create List" onClick={!createList}></input>
                    <input className="returnButton" type="button" value="Exit" onClick={logoutHandler}></input>
                </header>

                {createList || <div></div>}
            </div>
        )
}
