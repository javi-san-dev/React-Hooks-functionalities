import React, { useState, useRef } from 'react';
import './Form.css';
import Spinner from '../Spinner/Spinner';

const Form = props => {
    const { onAddTask, loading } = props;
    const refContainer = useRef(null);
    const [insertedPriority, setInsertedPriority] = useState(0);
    const [insertedGroup, setInsertedGroup] = useState(0);
    const [insertedTask, setInsertedTask] = useState('');
    const [insertedDate, setInsertedDate] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const submitHandler = event => {
        event.preventDefault();
        const values = {
            task: insertedTask,
            priority: insertedPriority,
            group: insertedGroup,
            date: insertedDate
        }
        console.log(values)
        console.log(refContainer.current.style.height)
        //refContainer.current.style.height = '73px';
        setIsLoading(true)
        onAddTask(values)
    }

    return (
        <div className='form-container' ref={refContainer} >
            <div className='form-container-title'>
                <h1>Add Task</h1>
                {isLoading && <Spinner />}
            </div>

            <form onSubmit={submitHandler} className="form">

                <div className="form-box" >
                    <label>Task</label>
                    <input
                        className='form-input'
                        placeHolder='insert task'
                        type="text"
                        id="title"
                        value={insertedTask}
                        onChange={event => {
                            setInsertedTask(event.target.value)
                        }}
                    />
                </div>

                <div className="form-box">
                    <label>Priority</label>
                    <select className='form-select' id="priority" value={insertedPriority}
                        onChange={event => {
                            setInsertedPriority(event.target.value)
                        }}>
                        <option value="low">low</option>
                        <option value="medium">medium</option>
                        <option value="high">high</option>
                        <option value="extreme">extreme</option>
                    </select>
                </div>

                <div className="form-box">
                    <label>Group</label>
                    <select className='form-select' id="priority" value={insertedGroup}
                        onChange={event => {
                            setInsertedGroup(event.target.value)
                        }}>
                        <option value="To eat">To eat</option>
                        <option value="To watch">To watch</option>
                        <option value="To buy">To buy</option>
                        <option value="To eat">To eat</option>
                    </select>
                </div>

                <div className="form-box">
                    <label>When</label>
                    <input
                        className='form-input'
                        type='date'
                        id="title"
                        value={insertedDate}
                        onChange={event => {
                            setInsertedDate(event.target.value)
                        }}
                    />
                </div>


                <button>Add</button>



            </form>
        </div>
    );
};

export default Form;