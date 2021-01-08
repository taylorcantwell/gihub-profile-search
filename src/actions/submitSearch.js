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
        //! merge requests into an array for payload dispatch
        const allData = [response, repoResponse];
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
