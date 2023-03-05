import { Box, Button, Typography , Paper , MenuList , MenuItem , ListItemText  ,  Divider, colors} from '@mui/material'
import React from 'react';
import { ShoppingCart } from '@mui/icons-material';


const Basket = (props) => {

  const {cartItems , onAdd , onRemove } = props;

  const total_price = cartItems.reduce((a , c) => { 
    return (a + (c.qty * c.price)) 
  }  , 0);
// array.reduce((accumilator , current_val) => accumilator + current_val  , inital value of accumilator);

  const tax_price = total_price * 0.14;

  const shipping_price = total_price > 2000 ? 0 : 20;

  const final_price = total_price + tax_price + shipping_price; 


  if(cartItems.length === 0) {
        return (
        <Box margin={5}>
            <Typography component='span' sx={{marginBottom : 1}}>The Cart is Empty</Typography>
            <ShoppingCart/>
        </Box>
        )
  }

  else
  return (
    <Box margin={5}>

      {/* <Typography>Basket</Typography> */}

      <Paper sx={{marginLeft: 2 , maxWidth: '90%' }}>

      <MenuList>


      {
        cartItems.map((item) => {

        return(  
          <MenuItem key={item.id} sx={{'&:hover' : {background : '#D3D3D3'}}}>
          
                    <ListItemText>{item.name}</ListItemText>

                    <Box component="span" margin={{xs : 2 , lg : 3}} display={{sm:'flex'}}> 
                        <button  onClick={() => {onAdd(item)}} style={{backgroundColor : colors.blue[700] , width : '30px' , border : 'none' , borderRadius : '3px'}}>+</button>
                        <Typography component="span" sx={{margin : '5px'}}>{item.qty}</Typography>
                        <button style={{backgroundColor : colors.amber[900] , width : '30px' , border : 'none' , borderRadius : '3px'}} onClick={() => {onRemove(item)}}>-</button>
                    </Box>

                    <Typography variant="body2">{item.qty} x ₹{item.price}</Typography>

          </MenuItem>
         
        )})
      }

        <Divider sx={{background : 'black' , margin : '5px'}} />


        <MenuItem>
          <ListItemText>Total Price</ListItemText>
          <Typography variant="body2">
            ₹{total_price}
          </Typography>
        </MenuItem>

        <MenuItem>
          <ListItemText>Tax Price</ListItemText>
          <Typography variant="body2">
            ₹{tax_price.toFixed(2)}
          </Typography>
        </MenuItem>

        <MenuItem>
          <ListItemText>Shipping Pice</ListItemText>
          <Typography variant="body2">
            ₹{shipping_price}
          </Typography>
        </MenuItem>


        <Divider sx={{background : 'black' , margin : '5px'}} />

        <MenuItem>
        <ListItemText>Final Price</ListItemText>
          <Typography variant="body2" sx={{fontWeight : 'bold'}}>
            ₹{final_price}
          </Typography>
        </MenuItem>

        <MenuItem>
        <Button sx={{width : '100%' , background : colors.yellow.A200 , color : 'black' , "&:hover" : {background : colors.yellow[500]}}}>Checkout</Button>
        </MenuItem>
      </MenuList>
          

      </Paper>


    </Box>

  )
}

export default Basket 