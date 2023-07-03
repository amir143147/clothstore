
import {  ThemeProvider, createTheme } from "@mui/material";
import Header from "./components/Header";
import { useState } from "react";

// const useStyles=makeStyles({
//   heading:{
//     color:'red',
//     fontSize:'50px'
//   }
// });

    const theme= createTheme({
      palette:{
        primary:{
          main:'#864313'
        }
      }
    });


function App() {
  
  // const classes=useStyles();
  let [cart,setcart]=useState([]);
  
  
  const addcart=(cartdata)=>{
    console.log(cartdata);
   setcart([...cart,cartdata])
      }
  return (
    
      <ThemeProvider theme={theme}>
      <Header  addcart={addcart} cart={cart}/>
      {/* <Cart  cart={cart}/> */}
      </ThemeProvider>
      


    
  );


 
}

export default App;
