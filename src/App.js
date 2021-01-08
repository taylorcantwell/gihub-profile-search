import React from 'react';
import styled from 'styled-components';
import SearchBar from './components/SearchBar';
import UserProfile from './components/UserProfile';
import Global from './components/GlobalStyles';

const App = () => {
    return (
        <Container>
            <Global />
            <SearchBar />
            <UserProfile />
        </Container>
    );
};

const Container = styled.div`
    max-width: 1200px;
    margin: 0 auto;
`;

export default App;
