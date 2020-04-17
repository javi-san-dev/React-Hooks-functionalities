import React, { useReducer, useMemo, useEffect } from 'react';
import './Home.css';
import Form from '../componenets/Form/Form';
import List from '../componenets/List/List';
import Search from '../componenets/Search/Search';

import useHttp from '../hooks/http';


const taskReducer = (currentTasks, action) => {
    switch (action.type) {
        case 'SET':
            return currentTasks.filter(elem => elem.task.startsWith(action.tasks));
        case 'ADD':
            const addTask = action.task;
            addTask["id"] = action.id;
            return [...currentTasks, addTask];
        case 'DELETE':
            return currentTasks.filter(elem => elem.task !== action.task);
        default:
            throw new Error('new errorrr!')
    }
}

const Home = () => {
    const [userTasks, dispatch] = useReducer(taskReducer, []);
    const {
        isLoading,
        error,
        dataId,
        sendRequest,
        values,
        reqIdentifer,
        clear
    } = useHttp();

    useEffect(() => {
        if (reqIdentifer === 'REMOVE_TASK') dispatch({ type: 'DELETE', id: dataId });
        if (reqIdentifer === 'ADD_TASK') dispatch({ type: 'ADD', task: values, id: dataId });
    }, [dataId, values, reqIdentifer, isLoading, error])

    const addTaskHandler = values => {
        sendRequest(
            'https://react-hooks-e1106.firebaseio.com/tasks.json',
            'POST',
            JSON.stringify(values),
            values,
            'ADD_TASK'
        );
    }

    const removeTaskHandler = taskId => {
        dispatch({ type: 'DELETE', taskId: taskId });
        sendRequest(
            `https://react-hooks-e1106.firebaseio.com/tasksId/`,
            'DELETE',
            null,
            'REMOVE_TASK'
        );
    }

    const filteredTasks = tasks => {
        dispatch({ type: 'SET', tasks: tasks });
    }

    const MyTaskList = useMemo(() => {
        return (
            <List tasks={userTasks} onRemoveTask={removeTaskHandler} />
        )
    }, [userTasks, removeTaskHandler]);

    return (
        <div className='home-container'>
            <Form onAddTask={addTaskHandler} />
            <Search onLoadingTasks={filteredTasks} />
            {MyTaskList}
        </div>
    );
};

export default Home;