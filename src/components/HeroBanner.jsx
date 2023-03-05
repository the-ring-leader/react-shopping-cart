import React from 'react';
import { Box , Button } from '@mui/material';



const heroImageStyle =  {
  backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)) , url(/background.jpg)" ,
  backgroundColor : "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))",
  height: "100%" ,
  backgroundPosition : "center" ,
  backgroundRepeat : "no-repeat" ,
  backgroundSize : "cover",
  position: "relative",
  // filter: "blur(8px)",

}

const heroTextStyle =  {
  textAlign: "center" ,
  position: "absolute" ,
  top: "50%" ,
  left: "50%" ,
  transform: "translate(-50%, -50%)" ,
  color: "white",
  border : "2px solid white",
  padding : '100px',
  backgroundColor: "rgba(0,0,0, 0.4)",
  zIndex : 2
}


const HeroBanner = (props) => {

  const { scrollFunction } = props;

  return (
    <Box height={700}> 
      <div style={heroImageStyle}>

         <div style={heroTextStyle}>
            <h1>Welcome To Shoppy</h1>
            <p>One Stop Stop</p>
            <Button onClick={() => {scrollFunction()}}>Let's Shop</Button>
        </div> 

      </div>

    </Box>
  )
}

export default HeroBanner;