import React , { Component } from 'react';
import styles from './Todo.css';


export const Todo = () => {
        return(
            <div className= "headerMain" >
                <header className = "headerNav"> 
                    <h1> ITracers task-manager</h1>
                    <input className="returnButton" type="button" value="Return"></input>
                </header>
                <main className="main">

                </main>
            </div>
        )
}
