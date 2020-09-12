import React from 'react';
import { connect } from 'react-redux';
import { searchQueryTyped } from '../../redux/actions';

import './SearchBar.scss';

const SearchBar = ({ searchQuery, onInputSearch }) => {
    return (
        <div className="searchbar">
            <input
                value={searchQuery}
                onChange={(e) => onInputSearch(e.target.value)}
                className="searchbar__input"
                placeholder="Введите название фильма"
                type="text" />
        </div>
    )
};

const mapStateToProps = ({ searchQuery }) => ({
    searchQuery
});

const mapDispatchToProps = (dispatch) => ({
    onInputSearch: (query) => dispatch(searchQueryTyped(query))
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)
