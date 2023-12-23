import React from 'react';
import { useState } from 'react';

function Filter({ fields, onFilterChange }) {
    const [filterType, setFilterType] = useState({ type: '', index: null });

    const handleFilterClick = (filter, index) => {
        const newFilter = { type: filter, index };
        setFilterType(newFilter);
        onFilterChange(newFilter);
    };

    const clearFilter = () => {
        setFilterType({ type: '', index: null });
        onFilterChange({ type: '', index: null });
    };

    return (
        <>
            <div className="filter-tabs">
                <span>Filter by:</span>
                {fields.map((field, index) => (
                    <button className="filter-btn" key={field} onClick={() => handleFilterClick(field, index)}>
                        {field}
                    </button>
                ))}
                <div>
                    <span>
                        {filterType.type ? `Selected Filter: ${filterType.type}` : ''}
                    </span>
                    {filterType.type && (
                        <button className="clear-btn" onClick={clearFilter}>
                            X
                        </button>
                    )}
                </div>
            </div>
        </>
    );
}

export default Filter;