// import React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import { styled } from '@mui/system';
// import { Menu, MenuItem } from '@mui/material';

// const GrayAppBar = styled(AppBar)({
//   backgroundColor: 'black',
// });

// const Header: React.FC = () => {
//     return (
//         <GrayAppBar position="static">
//             <Toolbar>
//                 <Typography variant="h6" component="div">
//                     The ArKive
//                 </Typography>
//             </Toolbar>
//         </GrayAppBar>
//     );
// };

// export default Header;

import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';

const GrayAppBar = styled(AppBar)({
  backgroundColor: 'black',
});

const Header: React.FC = () => {
    return (
        <GrayAppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="div">
                    The ArKive
                </Typography>                
            </Toolbar>
        </GrayAppBar>
    );
};

export default Header;