import React from 'react';
import { Grid , Card , CardContent , Typography, CardActions, Button, CardActionArea, CardMedia, colors } from '@mui/material';
import { yellow } from '@mui/material/colors';
import { Stack } from '@mui/system';
import MyButton from './MyButton';

const Product = (props) => {

    const { product , onAdd , onRemove  , item} = props;

    const addColor = yellow.A200;

  return (
    <Grid item padding={1}>
        <Card sx={{height : 350 , width : 300}}>
          <CardActionArea>
            <CardMedia 
            component="img"
            image={product.image}
            sx={{height : 200}}
            />
          <CardContent>
            <Typography>{product.name}</Typography>
            <Typography>₹ {product.price}</Typography>
          </CardContent>
          </CardActionArea>

          <CardActions>
            { item ? 

                 <Stack direction="row" sx={{ marginBottom : 10 , marginLeft : 'auto' , marginRight : 'auto'}}>
                    {/* <Button sx={{backgroundColor : colors.blue[700] , color : "white"}} onClick={() => {onAdd(product)}}>+</Button> */}
                    <MyButton
                      myColor = {colors.blue[700]}
                      onRemove = {onRemove}
                      product = {product}
                    >+</MyButton>

                    <Typography sx={{margin : '5px'}}>{item.qty}</Typography>
                    {/* <Button sx={{backgroundColor : colors.amber[900] , color : 'black'}} onClick={() => {onRemove(product)}}>-</Button> */}
                    <MyButton
                      myColor = {colors.amber[900]}
                      onRemove = {onRemove}
                      product = {product}
                    >-</MyButton>
                 </Stack> 

                 :

                 <Button
                 sx={{background : addColor , color : 'black', marginBottom : 10  , '&:hover' : { backgroundColor : '#fffaa0'} }}
                 onClick={() => {onAdd(product)}}>Add To Cart</Button>
     

            //  <Button sx={{marginBottom : 10 , border : '1px solid black'}}>Read More</Button>
                
            }

          </CardActions>
        </Card>
      </Grid>
  )
}

export default Product