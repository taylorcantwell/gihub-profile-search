const searchInputReducer = (state = '', action) => {
    switch (action.type) {
        case 'INPUT_ACTION':
            return action.payload;

        default:
            return state;
    }
};

export default searchInputReducer;
