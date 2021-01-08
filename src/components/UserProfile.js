import React from 'react';
import styled from 'styled-components';
import Loader from './Loader';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestion } from '@fortawesome/free-solid-svg-icons';

const UserProfile = () => {
    //! grab user profile data from state
    const { gitUserResults: data } = useSelector((state) => {
        return state;
    });

    //!grab state regarding if data has loaded
    const isDataLoading = useSelector((state) => {
        return state.isDataLoading;
    });

    //! create list of repos -- slicing to first 5 elements
    const repoList = data.repos.map((repo) => {
        return (
            <a key={repo.id} href={repo.html_url} style={{ display: 'block' }}>
                {repo.name}
            </a>
        );
    });

    //! line 29 -if there is no avatar, display question mark
    return (
        <>
            {isDataLoading === true ? (
                <Loader />
            ) : (
                <FlexContainer>
                    <ImageContainer>
                        {data.avatar === '' ? (
                            <FontAwesomeIcon
                                icon={faQuestion}
                                id="icon"
                                size="5x"
                            />
                        ) : null}
                        {data.avatarName ? (
                            <a href={`https://github.com/${data.avatarName}`}>
                                <img src={data.avatar} alt="github avatar" />
                            </a>
                        ) : null}
                    </ImageContainer>
                    <UserInformation>
                        <p>
                            Name: <span>{data.avatarName}</span>{' '}
                        </p>

                        <p>
                            Followers: <span>{data.followers}</span>
                        </p>

                        <p>
                            Repos: <span>{data.repositories}</span>
                        </p>
                    </UserInformation>
                    <Repository>
                        <p>Popular Repositories:</p> {repoList}
                    </Repository>
                </FlexContainer>
            )}
        </>
    );
};

export default UserProfile;

//!styled Components
const FlexContainer = styled.div`
    display: flex;
    padding-top: 3rem;
`;
const ImageContainer = styled.div`
    flex: 1;
    #icon {
        margin-left: 7rem;
        padding: 0.5rem;
    }

    img {
        max-width: 65%;
        border-radius: 5px;
        box-shadow: 4px 11px 21px -8px rgba(0, 0, 0, 0.75);
        -webkit-box-shadow: 4px 11px 21px -8px rgba(0, 0, 0, 0.75);
        -moz-box-shadow: 4px 11px 21px -8px rgba(0, 0, 0, 0.75);
    }
`;

const UserInformation = styled.div`
    flex: 1;

    p {
        padding: 0.5rem;
        font-weight: 700;
        span {
            font-weight: 400;
            padding-left: 5px;
        }
    }
`;
const Repository = styled.div`
    flex: 1;

    a {
        padding: 0.5rem;
    }
    p {
        padding: 0.5rem;
        font-weight: 700;
        cursor: pointer;
    }
`;
