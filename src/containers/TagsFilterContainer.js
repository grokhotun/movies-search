import React from 'react';
import { connect } from 'react-redux';
import { onTagRemove } from '../redux/actions';

import { TagsFilter } from '@components';

const TagFilterContainer = ({ filterTags, onTagRemove }) => {
    return (
        <TagsFilter onTagRemove={onTagRemove} filterTags={filterTags} />
    )
};

const mapStateToProps = ({ filterTags }) => ({
    filterTags
});

const mapDispatchToProps = (dispatch) => ({
    onTagRemove: (tag) => dispatch(onTagRemove(tag))
});

export default connect(mapStateToProps, mapDispatchToProps)(TagFilterContainer)
