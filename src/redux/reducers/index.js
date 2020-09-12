const initialState = {
    movies: [],
    loading: true,
    error: false,

    filterBy: 'all',
    filterTags: [],
    bookmarks: [],
    searchQuery: ''
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_MOVIES_REQUEST':
            return {
                ...state,
                loading: true,
                error: false
            }
        
        case 'FETCH_MOVIES_FAILED':
            return {
                ...state,
                movies: [],
                error: true,
                loading: false
            }
        
        case 'FETCH_MOVIES_SUCCESS':
            return {
                ...state,
                movies: action.payload,
                error: false,
                loading: false
            }

        case 'MOVIE_BOOKMARKS_TOGGLE': {
            const { bookmarks, movies } = state;
            const itemIndex = movies.findIndex(({ title }) => title === action.payload);
            const isBookmarked = bookmarks.findIndex((item) => item === action.payload);
            const findingItem = movies[itemIndex].title;
            if (isBookmarked > -1) {
                return {
                    ...state,
                    bookmarks: [
                        ...bookmarks.slice(0, isBookmarked),
                        ...bookmarks.slice(isBookmarked + 1)
                    ]
                }
            } else {
                return {
                    ...state,
                    bookmarks: [...bookmarks, findingItem]
                }
            }
        }

        case 'SET_FILTER_BY':
            return {
                ...state,
                filterBy: action.payload
            }

        case 'FILTER_TAG_ADDED': {
            const { filterTags } = state;
            const isAdded = filterTags.findIndex((item) => item === action.payload);
            if (isAdded < 0) {
                return {
                    ...state,
                    filterTags: [
                        ...filterTags,
                        action.payload
                    ]
                }
            } else {
                return {
                    ...state
                }
            }
        }

        case 'FILTER_TAG_REMOVED': {
            const { filterTags } = state;
            const isAdded = filterTags.findIndex((item) => item === action.payload);
            if (isAdded > -1) {
                return {
                    ...state,
                    filterTags: [
                        ...filterTags.slice(0, isAdded),
                        ...filterTags.slice(isAdded + 1)
                    ]
                }
            } else {
                return {
                    ...state
                }
            }
        }

        case 'SEARCH_QUERY_TYPED':
            return {
                ...state,
                searchQuery: action.payload
            }

        case 'BOOKMARKS_SAVED':
            localStorage.setItem('bookmarks', JSON.stringify({
                bookmarks: state.bookmarks,
                activeTab: state.filterBy
            }));
            return {
                ...state
            }

        case 'BOOKMARKS_RESTORED': {
            let localStorageObject = localStorage.getItem('bookmarks');
            localStorageObject = JSON.parse(localStorageObject);
            if (localStorageObject) {
                return {
                    ...state,
                    bookmarks: localStorageObject.bookmarks,
                    filterBy: localStorageObject.activeTab
                }
            } else {
                return {
                    ...state
                }
            }
        }

        default:
            return {
                ...state
            }
    }
};

export default reducer;