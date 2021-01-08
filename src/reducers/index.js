import gitResultsReducer from './gitResultsReducer';
import searchInputReducer from './searchInputReducer';
import gitUserExistsReducer from './gitUserExistsReducer';
import isLoadingReducer from './isLoadingReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    gitUserResults: gitResultsReducer,
    searchInput: searchInputReducer,
    userExists: gitUserExistsReducer,
    isDataLoading: isLoadingReducer,
});

export default rootReducer;
