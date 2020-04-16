import React from 'react';
import './List.css';

const List = props => {
    const { tasks, onRemoveTask } = props;
    return (
        <div className='list-container'>
            <ul>
                {tasks.map((elem, id) => (
                    <li key={id}>
                        <div>
                            <p>{elem.group}</p>
                            <p onClick={onRemoveTask.bind(this, elem.task)}>X</p>
                        </div>
                        <div>
                            <p>{elem.task}</p>
                            <p>{elem.priority}</p>
                        </div>

                    </li>
                ))}
            </ul>

        </div>
    );
};

export default List;