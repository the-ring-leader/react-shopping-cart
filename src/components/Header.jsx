import React from 'react';
import { Box , AppBar, Toolbar, Typography , Button, IconButton , Badge } from '@mui/material';
import { styled } from '@mui/system';
import { ShoppingCart } from '@mui/icons-material';
import Logo from '../assets/carts.png';


const Header = (props) => {

  const { cartItemsLength } = props;


  const MyBox = styled(Box)(({ theme }) => ({
    display : 'none',
    [theme.breakpoints.up('md')]: {
      display : 'flex'
    }
}));

  const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: -3,
      top: 13,
      border: '2px solid pink',
      padding: '0 4px',
      backgroundColor : 'pink'
    },
  }));

  console.log(cartItemsLength);

  return (
      <Box>
        <AppBar position='sticky'> 
          <Toolbar>
              <Typography variant='h6' sx={{flexGrow : 1 , marginBottom : 1}}>Shoppy<img src={Logo} alt="logo" style={{height : '30px' , width : '30px'}}/></Typography>
            <MyBox>
               <IconButton aria-label="cart" sx={{marginRight : 2}}>
                <StyledBadge badgeContent={cartItemsLength} 
                sx={{color : 'black'}}>
                  <ShoppingCart/>
                </StyledBadge>
              </IconButton> 
              <Button color='inherit'>Sign In</Button>
            </MyBox>
            {/* <IconButton color='inherit'>
                <MenuIcon></MenuIcon>
            </IconButton> */}
          </Toolbar>
        </AppBar>
      </Box>
  )
}

export default Header;