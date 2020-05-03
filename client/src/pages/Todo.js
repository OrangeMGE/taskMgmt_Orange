import { TodoNavbar } from './TodoNavbar'
import { TodoList } from './TodoList'
import React , { Component, useContext } from 'react';
import styles from './Todo.css';


export const Todo = () => {
    return (
        <div>
            <TodoNavbar />
            
            <div className="todoContainer">
                <TodoList />
                <TodoList />
            </div>
        </div>
    )
} 