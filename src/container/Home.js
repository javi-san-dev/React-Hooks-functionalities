import React, { useReducer, useMemo } from 'react';
import './Home.css';
import Form from '../componenets/Form/Form';
import List from '../componenets/List/List';
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
    const [userTasks, dispatch] = useReducer(taskReducer, [])
    /*
   firebase.firestore().collection('times').add({
       title: 'titulo',
       seconds: 34
   })*/

    const addTaskHandler = values => {
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
            {MyTaskList}
        </div>
    );
};

export default Home;