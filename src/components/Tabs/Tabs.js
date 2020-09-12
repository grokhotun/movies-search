import React from 'react';
import classnames from 'classnames';

import './Tabs.scss';

const Tabs = ({ filterBy, onTabSelect }) => {
    return (
        <div className="tabs">
            <button onClick={() => onTabSelect('all')} className={classnames("tabs__btn tabs__btn", {"is-active": filterBy === "all"})}>Все фильмы</button>
            <button onClick={() => onTabSelect('bookmarks')} className={classnames("tabs__btn tabs__btn", {"is-active": filterBy === "bookmarks"})}>Закладки</button>
        </div>
    )
};

export default Tabs
