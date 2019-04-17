import React from 'react';

export const Search = ({searchPhrase, input}) => (
    <div>
        <input type="text" value={searchPhrase} onChange={($event) => input($event)}/>
    </div>
);

export default Search;
