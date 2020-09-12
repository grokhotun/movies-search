import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { fetchMovies, movieBookmarksToggle, onTagSelect, bookmarksSaved, bookmarksRestored } from '../redux/actions';
import { ErrorIndicator, Spinner, MoviesListItem, Empty} from '@components';
import { sortBy, querySearch, filterByTags } from '../utils';

const MoviesListContainer = ({ 
    movies, error, loading, 
    fetchMovies, bookmarks, onBookmarksToggle, 
    onTagSelect, saveBookmarks, restoreBookmarks }) => {

    const [shownMovies, setShownMovies] = useState(5);

    const onShowMore = () => setShownMovies(shownMovies + 10);

    const bookmarksToogle = (title) => {
        onBookmarksToggle(title);
        saveBookmarks();
    };

    const isBookmarked = (title) => (bookmarks.includes(title));

    useEffect(() => {
        restoreBookmarks();
        fetchMovies();
    }, []);
    
    if (error) return <ErrorIndicator/>
    if (loading) return <Spinner/>

    return (
        <div className="movies-list">
            <ul className="movies-list__list">
                {
                    movies.length === 0 
                    ? <Empty/> 
                    : movies.slice(0, shownMovies).map(({ title, tags }, index) => (
                        <MoviesListItem 
                            key={index} 
                            bookmarksToogle={bookmarksToogle}
                            onTagSelect={onTagSelect}
                            isBookmarked={isBookmarked(title)}
                            title={title}
                            tags={tags} />
                    ))
                }
            </ul>
            {
                shownMovies >= movies.length 
                ? null
                : <button onClick={onShowMore} className="movies-list__showmore">Показать еще</button>
            }
        </div>
    )
};

const mapStateToProps = ({ movies, error, loading, bookmarks, filterBy, searchQuery, filterTags }) => ({
    error,
    loading,
    movies: sortBy(filterByTags(querySearch(movies, searchQuery), filterTags), bookmarks, filterBy),
    bookmarks
});

const mapDispatchToProps = (dispatch) => ({
    fetchMovies: fetchMovies(dispatch),
    onBookmarksToggle: (title) => dispatch(movieBookmarksToggle(title)),
    onTagSelect: (tag) => dispatch(onTagSelect(tag)),
    saveBookmarks: () => dispatch(bookmarksSaved()),
    restoreBookmarks: () => dispatch(bookmarksRestored())
});

export default connect(mapStateToProps, mapDispatchToProps)(MoviesListContainer)
