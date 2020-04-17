import React, { useReducer, useMemo, useEffect } from 'react';
import './Home.css';
import Form from '../componenets/Form/Form';
import List from '../componenets/List/List';
import Search from '../componenets/Search/Search';

import useHttp from '../hooks/http';

//import firebase from '../../config/firebase';

const taskReducer = (currentTasks, action) => {
    switch (action.type) {
        case 'SET':
            return
        case 'ADD':
            return [...currentTasks, action.task];
        case 'DELETE':
            return currentTasks.filter(elem => elem.task != action.task);
        default:
            throw new Error('new errorrr!')
    }
}
const Home = () => {
    const [userTasks, dispatch] = useReducer(taskReducer, []);
    const {
        isLoading,
        error,
        data,
        sendRequest,
        reqExtra,
        reqIdentifer,
        clear
    } = useHttp();
    /*
   firebase.firestore().collection('times').add({
       title: 'titulo',
       seconds: 34
   })*/
    useEffect(() => {

    }, [])

    const addTaskHandler = values => {
        sendRequest(
            '',
            'POST',
            JSON.stringify(values),
            values,
            'ADD_TASK'
        );
        dispatch({
            type: 'ADD',
            task: values
        })
    }

    const removeTaskHandler = task => {
        dispatch({
            type: 'DELETE',
            task: task
        })
    }

    const MyTaskList = useMemo(() => {
        return (
            <List tasks={userTasks} onRemoveTask={removeTaskHandler} />
        )
    }, [userTasks, removeTaskHandler]);

    return (
        <div className='home-container'>
            <Form onAddTask={addTaskHandler} />
            <Search />
            {MyTaskList}
        </div>
    );
};

export default Home;