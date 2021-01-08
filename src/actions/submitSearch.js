import axios from 'axios';

const submitSearch = (search) => async (dispatch) => {
    try {
        dispatch({ type: 'DATA_LOADING' });

        const response = await axios.get(
            `https://api.github.com/users/${search}`
        );
        const repoResponse = await axios.get(
            `https://api.github.com/users/${search}/repos`
        );

        //!sort the repo results by star count and slice the top 5
        const sortedRepoResult = repoResponse.data
            .sort(function (a, b) {
                return b.stargazers_count - a.stargazers_count;
            })
            .slice(0, 5);

        //! merge requests into an array for payload dispatch
        const allData = [response, sortedRepoResult];

        //!combine actions
        const actions = [
            {
                type: 'DATA_LOADED',
            },
            {
                type: 'SEARCH_ACTION',
                payload: allData,
            },
            {
                type: 'USER_EXISTS',
            },
        ];

        //! loop of array of actions and dispatch
        actions.forEach((action) => {
            dispatch(action);
        });
    } catch (error) {
        dispatch({ type: 'DATA_LOADED' });
        dispatch({ type: 'USER_EXIST_FALSE' });
    }
};

export default submitSearch;
