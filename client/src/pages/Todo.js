import { TodoNavbar } from './TodoNavbar'
import { TodoList } from './TodoList'
import { ListHook } from '../hooks/list.hook';
import React , { Component, useContext } from 'react';
import styles from './Todo.css';


export const Todo = () => {
    const { request } = ListHook();


    window.onload = async () => {
        try{
            const userData = JSON.parse(localStorage.getItem('userData'))
            console.log('userData: ' , userData ) //Убрать
            console.log('Окно загрузилось') //Убрать
            const data = await request('/api/list/required', 'POST', {userData})
            console.log(data.message);
        } catch(e) {}
    }

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