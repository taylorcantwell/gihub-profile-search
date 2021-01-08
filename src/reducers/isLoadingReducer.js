const isLoadingReducer = (state = false, action) => {
    switch (action.type) {
        case 'DATA_LOADING':
            return true;
        case 'DATA_LOADED':
            return false;
        default:
            return state;
    }
};

export default isLoadingReducer;
