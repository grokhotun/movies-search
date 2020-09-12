import React from 'react';
import { connect } from 'react-redux';
import { Tabs } from '@components';
import { setFilterBy, bookmarksSaved } from '../redux/actions';

const TabsContainer = ({ filterBy, onTabChange, saveBookmarks }) => {

    const onTabSelect = (filter) => {
        onTabChange(filter);
        saveBookmarks();
    };
    
    return <Tabs onTabSelect={onTabSelect} filterBy={filterBy}/>
};

const mapStateToProps = ({ filterBy }) =>({
    filterBy
});

const mapDispatchToProps = (dispatch) =>({
    onTabChange: (filter) => dispatch(setFilterBy(filter)),
    saveBookmarks: () => dispatch(bookmarksSaved())
});

export default connect(mapStateToProps, mapDispatchToProps)(TabsContainer)
