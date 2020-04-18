import React from 'react';
import './List.css';

const List = props => {
    const { tasks, onRemoveTask } = props;
    return (
        <div className='list-container'>
            <div className='list-header'>
                <p>Tasks</p>
                <p className='date-list'>Date</p>
                <p className='group-list'>Group</p>
                <p className='priority-list'>Priority</p>
                <p className='delete-list'>Delete</p>
            </div>
            <ul>
                {tasks.map((elem, id) => (
                    <li key={id}>
                        <div className='list-circle'></div>
                        <p className='task-list'>{elem.task}</p>
                        <p className='date-list'>{elem.date}</p>
                        <p className='group-list'>{elem.group}</p>
                        <p className='priority-list'>{elem.priority}</p>
                        <button className='delete-list' onClick={onRemoveTask.bind(this, elem.id)}>Remove</button>
                    </li>
                ))}
            </ul>

        </div>
    );
};

export default List;