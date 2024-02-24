import React from 'react';
import { styled } from '@mui/system';
import { Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const RootContainer = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    background: 'linear-gradient(to bottom, #f5f5f5, #e0e0e0)',
});

const Title = styled(Typography)({
    fontSize: '10rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
    color: '#333',
});

const Subtitle = styled(Typography)({
    fontSize: '3rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
    color: '#666',
});

const Message = styled(Typography)({
    fontSize: '1.5rem',
    marginBottom: '2rem',
    color: '#777',
});

const NotFound: React.FC = () => {
    return (
        <RootContainer>
            <Title variant="h1">404</Title>
            <Subtitle variant="h4">Page Not Found</Subtitle>
            <Message variant="body1">The page you are looking for does not exist.</Message>
            <Button component={Link} to="/" variant="contained" color="inherit">
                Go Back Home
            </Button>
        </RootContainer>
    );
};

export default NotFound;