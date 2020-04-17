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
            <div>Search By title:</div>
            <div>
                <input
                    value={insertedFilter}
                    onChange={(e) => {
                        setInsertedFilter(e.target.value);
                    }} />
            </div>
        </div >
    );
};

export default Search;