const initState = {
    avatar: '',
    repositories: '',
    followers: '',
    avatarName: '',
    repos: [],
};

const gitResultsReducer = (state = initState, action) => {
    switch (action.type) {
        case 'SEARCH_ACTION':
            return {
                avatar: action.payload[0].data.avatar_url,
                repositories: action.payload[0].data.public_repos,
                followers: action.payload[0].data.followers,
                avatarName: action.payload[0].data.login,
                repos: action.payload[1].data,
            };

        default:
            return state;
    }
};

export default gitResultsReducer;
