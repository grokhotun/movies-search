import React from 'react';
import classnames from 'classnames';
import './MoviesList.scss';

const MoviesListItem = ({ title, tags, bookmarksToogle, isBookmarked, onTagSelect }) => {
    return (
        <li className="movies-list__item item-movies-list">
            <div className="item-movies-list__title">
                {title}
            </div>
            <ul className="item-movies-list__tags">
                { tags.map((tag, index) => <li onClick={() => onTagSelect(tag)} key={index} className="item-movies-list__tag tag-bubble">{tag}</li>) }
            </ul>
            <button onClick={() => bookmarksToogle(title)} className={classnames("item-movies-list__btn", {"is-active": isBookmarked})}>
                <svg width="20" height="20" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.36997 10.9836L6.36925 10.9829C4.64275 9.41736 3.24999 8.1516 2.28301 6.96857C1.32152 5.79226 0.833374 4.75896 0.833374 3.66667C0.833374 1.8834 2.22225 0.5 4.00004 0.5C5.00889 0.5 5.98544 0.972229 6.62062 1.71231L7.00004 2.15438L7.37946 1.71231C8.01464 0.972229 8.99119 0.5 10 0.5C11.7778 0.5 13.1667 1.8834 13.1667 3.66667C13.1667 4.75896 12.6786 5.79226 11.7171 6.96857C10.7501 8.1516 9.35733 9.41736 7.63084 10.9829L7.63012 10.9836L7.00004 11.5572L6.36997 10.9836Z" stroke="black"/>
                </svg>
            </button>
        </li>
    )
};


export default MoviesListItem
