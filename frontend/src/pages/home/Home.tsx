import React from 'react';
import { styled } from '@mui/system';
import { Typography, Button } from '@mui/material';

const RootContainer = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
});

const Title = styled(Typography)({
    marginBottom: '1rem',
});

const ActionButton = styled(Button)({
    marginTop: '1rem',
});

const Home: React.FC = () => {
    return (
        <RootContainer>
            <Title variant="h2">
                Welcome to the Home Page
            </Title>
            <ActionButton variant="contained" color="primary">
                Get Started
            </ActionButton>
        </RootContainer>
    );
};

export default Home;
