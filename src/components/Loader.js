import React from 'react';
import styled from 'styled-components';

const Loader = () => {
    return (
        <$Loader>
            <div></div>
        </$Loader>
    );
};

//!styled component
const $Loader = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5rem;

    div {
        border: 16px solid #aaaaaa;
        border-top: 16px solid #333333;
        border-radius: 50%;
        width: 120px;
        height: 120px;
        animation: spin 2s linear infinite;
    }
    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`;

export default Loader;
