const _intersection = (array1, array2) => array1.filter((value) => array2.includes(value)).length > 0 ? true : false;

const sortBy = (items, bookmarks, type) => {
    switch (type) {
        case 'all':
            return items;
        case 'bookmarks':
            return items.filter((item) => bookmarks.includes(item.title));
        default:
            return items;
    }
};

const querySearch = (items, query) => {
    if (query.length === 0) {
        return items;
    } else {
        return items.filter((item) => item.title.toLowerCase().indexOf(query.toLowerCase()) > -1);
    }
};

const filterByTags = (items, tags) => {
    if (tags.length === 0) {
        return items;
    } else {
        return items.filter((item) => _intersection(item.tags, tags));
    }
};

export {
    sortBy,
    querySearch,
    filterByTags
}