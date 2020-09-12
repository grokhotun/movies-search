import MoviesSearchService from "../../services";
const MoviesSearchServiceApi = new MoviesSearchService();

const moviesLoaded = (movies) => ({
    type: 'FETCH_MOVIES_SUCCESS',
    payload: movies
});

const moviesRequested = () => ({
    type: 'FETCH_MOVIES_REQUEST',
});

const moviesError = () => ({
    type: 'FETCH_MOVIES_FAILED',
});

const movieBookmarksToggle = (title) => ({
    type: 'MOVIE_BOOKMARKS_TOGGLE',
    payload: title
});

const fetchMovies = (dispatch) => () => {
    dispatch(moviesRequested());
    MoviesSearchServiceApi.getMovies()
        .then((data) => dispatch(moviesLoaded(data)))
        .catch((error) => dispatch(moviesError(error)));
};

const setFilterBy = (filter) => ({
    type: 'SET_FILTER_BY',
    payload: filter
});

const onTagSelect = (tag) => ({
    type: 'FILTER_TAG_ADDED',
    payload: tag
});

const onTagRemove = (tag) => ({
    type: 'FILTER_TAG_REMOVED',
    payload: tag
});

const searchQueryTyped = (query) => ({
    type: 'SEARCH_QUERY_TYPED',
    payload: query
});

const bookmarksSaved = () => ({
    type: 'BOOKMARKS_SAVED'
});

const bookmarksRestored = () => ({
    type: 'BOOKMARKS_RESTORED'
});

export {
    fetchMovies,
    movieBookmarksToggle,
    setFilterBy,
    onTagSelect,
    onTagRemove,
    searchQueryTyped,
    bookmarksSaved,
    bookmarksRestored
}
