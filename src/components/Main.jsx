import { Box, Grid} from '@mui/material'
import React from 'react'
import Product from './Product';

const Main = (props) => {

  const { products , onAdd , cartItems ,  onRemove } = props;

  return (
  <Box margin={5}>

    <Grid container spacing={1}>
      {
        products.map((product , i) => {
          return <Product
          key = {i}
          product = {product}
          onAdd = {onAdd}
          onRemove = {onRemove} 
          item = {cartItems.find((x) => x.id === product.id)}
          />
        })
      }
    </Grid>
    
  </Box>
  )
}

export default Main