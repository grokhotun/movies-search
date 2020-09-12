import React from 'react';

import { SearchBar } from '@components';
import { TagsFilterContainer, MoviesListContainer, TabsContainer } from '@containers';

const App = () => {
    return (
        <div className="wrapper">
            <div className="container">
                <div className="content">
                    <div className="content__row">
                        <SearchBar/>
                    </div>
                    <div className="content__row">
                        <TabsContainer/>
                    </div>
                    <div className="content__row">
                        <TagsFilterContainer/>
                    </div>
                    <div className="content__row">
                        <MoviesListContainer/>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default App