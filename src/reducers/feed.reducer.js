import { fetchFeed } from '../services/feed.service';

const FETCH_FEED = 'FETCH_FEED';

const initialState = {
    tags: [],
    collections: [],
};

const loadFeed = feed => ({ type: FETCH_FEED, payload: feed });

const reducer = (state = initialState, action) => {
    switch (action.type) {
    case FETCH_FEED:
        return { collections: action.payload.collections, tags: action.payload.tags };
    default:
        return state;
    }
};

const feedLoader = queryParam => (
    (dispatch) => {
        fetchFeed(queryParam).then((feed) => {
            dispatch(loadFeed(feed));
        });
    }
);

export { reducer, feedLoader };
