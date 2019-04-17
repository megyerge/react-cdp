import React from 'react';

export const Result = ({searchPhrase, result, clearSearch, isLoading, error}) => (
    <div>
        <b>Finding: {searchPhrase}</b>
        <br/>
        { error ? <p>{error}</p> : null}
        { isLoading
            ? <p>Loading...</p>
            : (result || []).map(item => (
                <div key={item.show.id} className='moviecard'>
                    <p className='moviecard-details'>Title: <span>{item.show.name}</span></p>
                    <p className='moviecard-details'>Genre: <span>{item.show.genres[0]}</span></p>
                    <p className='moviecard-details'>Type: <span>{item.show.type}</span></p>
                </div>
            ))
        }
        <button id="clearBtn" className='clearBtn' onClick={clearSearch}>Clear search</button>
    </div>
);

export default Result;
