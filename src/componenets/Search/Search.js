import React, { useState, useEffect } from 'react';
import './Search.css';

const Search = props => {
    const { onLoadingTasks } = props;
    const [insertedFilter, setInsertedFilter] = useState('');

    useEffect(() => {
        onLoadingTasks(insertedFilter);
    }, [insertedFilter]);

    return (
        <div className='search-container'>
            <div>Search by group:</div>
            <div>
                <select className='form-select' id="priority" value={insertedFilter}
                    onChange={event => {
                        setInsertedFilter(event.target.value)
                    }}>
                    <option value=""></option>
                    <option value="To eat">To eat</option>
                    <option value="To watch">To watch</option>
                    <option value="To buy">To buy</option>
                    <option value="To eat">To eat</option>
                </select>
            </div>
        </div >
    );
};

export default Search;