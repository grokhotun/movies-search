import React from 'react';

const TagsFIlter = ({ onTagRemove, filterTags }) => {
    
    return (
        <div className="tags-filter">
            <ul className="tags-filter__list">
                { filterTags.map((tag, index) => <li key={index} onClick={() => onTagRemove(tag)} className="tag-bubble tag-bubble--deletable">{tag}</li>) }
            </ul>
        </div>
    )

};

export default TagsFIlter
