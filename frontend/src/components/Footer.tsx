import React from 'react';
import { styled } from '@mui/system';
import { Typography, Link } from '@mui/material';

const FooterContainer = styled('footer')({
//   backgroundColor: '#1976d2',
  backgroundColor: 'black',
  color: '#fff',
  padding: '16px',
  textAlign: 'center',
  marginTop: 'auto',
});

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <Typography variant="body1">
        © {new Date().getFullYear()} The ArKive
      </Typography>
      <Typography variant="body2">
        Built with{' '}
        <Link color="inherit" href="https://mui.com/">
          Material-UI
        </Link>
      </Typography>
    </FooterContainer>
  );
};

export default Footer;
