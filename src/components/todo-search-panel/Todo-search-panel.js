import React from 'react';

const SearchPanel = () => {

    const searchText = 'type here to search';
    return <input
        className="input-group"
        placeholder={searchText} />;
};

export default SearchPanel;