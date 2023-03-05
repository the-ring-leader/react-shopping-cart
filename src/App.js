import './App.css';
import { Grid , LinearProgress , Box } from '@mui/material';
import Header from './components/Header';
import Main from './components/Main';
import Basket from './components/Basket';
import HeroBanner from './components/HeroBanner';
import { grey } from '@mui/material/colors';
import { useDeferredValue, useEffect , useState , useTransition } from 'react';

import data from './data';


function App() {

  // destructering
  const{ products } = data;

  const [cartItems, setCartItems] = useState([]);

  const bgColor = grey[400];

  const onAdd = (product) => {

    const exists = cartItems.find((x) => x.id === product.id);

    if(exists) {
      const newCartItems = cartItems.map((x) => x.id === product.id ? {...exists , qty : exists.qty+1 } : x);
      setCartItems(newCartItems);
      // setting items to local storage
      localStorage.setItem('cartItems' , JSON.stringify(newCartItems))
             // format -> (key : value)
    }

    else {
      const newCartItems = [...cartItems , {...product , qty : 1}];
      setCartItems(newCartItems);
       // setting items to local storage
       localStorage.setItem('cartItems' , JSON.stringify(newCartItems));
       // format -> (key : value)
    }

    // console.log(product);
    console.log('Product Added')
  }

  const onRemove = (product) => {

    const exists = cartItems.find((x) => x.id === product.id);

    if(exists) {
        if(exists.qty === 1) {
          const newCartItems = cartItems.filter((x) => x.id !== product.id);
          setCartItems(newCartItems);
          // setting items to local storage
          localStorage.setItem('cartItems' , JSON.stringify(newCartItems))
          // format -> (key : value)
        }

        else {
          const newCartItems = cartItems.map((x) => x.id === product.id ? {...product , qty : exists.qty-1 } : x);
          setCartItems(newCartItems);
          // setting items to local storage
          localStorage.setItem('cartItems' , JSON.stringify(newCartItems))
          // format -> (key : value)
        }
      
    }

    console.log('Product Added');

  }

  // using useTransition Hook
   const [isPending , startTransition] =  useTransition();

  useEffect(() => {
    
   // start transition will contain those events that have low rendering priority 
   startTransition(() => {

    setCartItems(localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []);
   }) 

  }, [])
  
  const cartItemsLength = useDeferredValue(cartItems.length);

  return isPending ? (
          <Box sx={{ width: '100%' }}>
            <LinearProgress />
          </Box>
  ) : (
        <Grid container sx={{ backgroundColor: bgColor }}>

          <Grid item sm={12} xs={12}><Header cartItemsLength={cartItemsLength}/></Grid>

          <Grid item sm={12} xs={12}><HeroBanner/></Grid>

          <Grid item sm={6} xs={12}>
            <Main
            products = {products}
            onAdd = {onAdd}
            cartItems = {cartItems}
            onRemove = {onRemove}
            />
          </Grid>
         
          <Grid item sm={6} xs={12}>
            <Basket
            cartItems = {cartItems} 
            onAdd = {onAdd}
            onRemove = {onRemove}
          /></Grid>
        </Grid>
  );
}

export default App;
