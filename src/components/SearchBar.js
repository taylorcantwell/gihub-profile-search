import React from 'react';
import styled from 'styled-components';
//!import actions
import submitSearch from '../actions/submitSearch';
import searchInput from '../actions/searchInput';
//!redux imports
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

const SearchBar = () => {
    //!init use dispatch
    const dispatch = useDispatch();

    //!event handlers
    const onClickSearch = (e) => {
        e.preventDefault();
        dispatch(submitSearch(searchValue));
    };

    const onChangeInput = (e) => {
        dispatch(searchInput(e.target.value));
    };

    //!! grab search input from state
    const searchValue = useSelector((state) => {
        return state.searchInput;
    });

    //!! grab result of user exists from state
    const userExists = useSelector((state) => {
        return state.userExists;
    });

    //!! styled component using state data for styling
    const ErrorMessage = styled.div`
        display: ${userExists === false ? 'inline-block' : 'none'};

        background-color: pink;
        margin-top: 2rem;
    `;

    return (
        <Container>
            <Header>Git Profile</Header>
            <form>
                <SearchInput
                    onChange={onChangeInput}
                    type="text"
                    value={searchValue}
                />
                <button type="submit" onClick={onClickSearch}>
                    Search
                </button>
            </form>
            <ErrorMessage>
                The user your searched for does not exist.
            </ErrorMessage>
        </Container>
    );
};

//! styled components
const Container = styled.div`
    padding-bottom: 3rem;
    border-bottom: 1px solid black;
    button {
        margin-left: 1rem;
        padding: 0.5rem 1rem;
        cursor: pointer;
        border-radius: 5px;
        border: 1px solid grey;
        transition: transform 0.2s ease;
        &:hover {
            background-color: #313131;
            color: white;
            transform: scale(1.1);
        }
        &:active {
            transform: scale(0.9);
        }
    }
`;

const Header = styled.h1`
    padding: 2rem 0 1rem 0;
    font-weight: 700;
    font-size: 3rem;
    letter-spacing: 3px;
    text-transform: uppercase;
`;
const SearchInput = styled.input`
    border: 1px solid grey;
    border-radius: 5px;
    width: 25%;
    padding: 0.5rem 1rem;
    outline: 0;
    background-color: #f5f5f5;
`;

export default SearchBar;
