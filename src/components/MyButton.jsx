import React from 'react'
import { Button } from '@mui/material'

const MyButton = (props) => {
  return (
    <Button sx={{backgroundColor : props.myColor , color : 'black'}} onClick={() => {props.onRemove(props.product)}}>{props.children}</Button>

  )
}

export default MyButton;