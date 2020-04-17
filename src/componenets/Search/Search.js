import React, { useState } from 'react';
import './Search.css';

const Search = () => {
    const [insertedFilter, setInsertedFilter] = useState('')
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