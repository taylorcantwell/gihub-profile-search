const gitUserExistsReducer = (state = true, action) => {
    switch (action.type) {
        case 'USER_EXISTS':
            return true;
        case 'USER_EXIST_FALSE':
            return false;
        default:
            return state;
    }
};

export default gitUserExistsReducer;
