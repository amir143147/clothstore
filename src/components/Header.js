import React, { useEffect, useState } from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {  Paper } from '@mui/material';
import data from '../data';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Cart from '../cart';
import LocalPizzaIcon from '@mui/icons-material/LocalPizza';
import a from '../assets/2.jpg';
import b from '../assets/3.jpg';
import c from '../assets/4.jpg';
import d from '../assets/5.jpg';
import e from '../assets/6.jpg';
// import f from '../assets/7.jpg';
// import g from '../assets/8.jpg';
// import h from '../assets/9.jpg';



const Header = ({ addcart, cart }) => {

  let [showcart, setshowcart] = useState(false)
  let [copy, setcopy] = useState([])
  let [query,setquery]=useState({text:'welcom',img:a})


  useEffect(() => {

    setTimeout(() => {
      setcopy(data)
    }, 5000)

  })

  let handlechange = (e) => {
    console.log(e);
    let getchange = e.toLowerCase();
    if (getchange === "") {
      setcopy(data)
    }
    else {
      let ch = copy.filter((ele, k) => {
        return ele.name.toLowerCase().match(getchange);
      })
      setcopy(ch);
    }
  }

  let changerecipie=()=>{
       setquery({
        text:'1',
        img:b
       })
  }
  let changerecipie1=()=>{
    setquery({
     text:'2',
     img:c
    })
}
let changerecipie2=()=>{
  setquery({
   text:'3',
   img:d
  })
}
let changerecipie3=()=>{
  setquery({
   text:'4',
   img:e
  })
}
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              News
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </Box>

      {/* navbar */}
      <Paper>
        <div className='container-fluid'>
          <div className='row p-4 '>
            <div className='col-lg-4'>
              <h5 style={{ color: 'green' }} onClick={() => setshowcart(false)}>Pak Express</h5>
            </div>
            <div className='col-lg-3 offset-5 text-center' >
              <Button onClick={() => setshowcart(true)}>
                <ShoppingCartIcon sx={{ fontSize: '30px', color: 'green' }} />
              </Button>
              <span className='count-number'>{cart.length}</span>
            </div>
          </div>
        </div>
      </Paper>



      {/* banner image */}

      <div className='container-fluid'>
        <div className='row p-4 '>

          <div className='col-lg-12  banner-img' >
            <div className='layer'>
              <Typography variant='h2'>Enjoye Eid shoping </Typography>
              <Typography variant='h5'>welcome to our clothing store</Typography>
            </div>
          </div>
        </div>
        <h2 className='text-center'>welcome to our home page</h2>
      </div>



      {/* menu area */}

      <div className='container mt-5 '>

        <div className='text-center '>
          <LocalPizzaIcon className='icons' onClick={changerecipie}/>
          <LocalPizzaIcon className='icons'  onClick={changerecipie1}/>
          <LocalPizzaIcon className='icons' onClick={changerecipie2} />
          <LocalPizzaIcon className='icons'  onClick={changerecipie3}/></div>
        <div className='row py-4 '>

         
            <div className='col-6'>
              <Typography variant='h2'>Enjoye Eid shoping </Typography>
              <Typography variant='h5'>{query.text}</Typography>
            </div>

            <div className='col-6 food-img'>
              <img src={query.img} alt='img'/>
              <Typography variant='h2'>Enjoye Eid shoping </Typography>
              
            </div>
        
        </div>

      </div>



      {/* Input field */}

      <Container>

        <div className="input-group flex-nowrap my-5">
          <div className="input-group-prepend">
            <span className="input-group-text" id="addon-wrapping">@</span>
          </div>
          <input type="text" onChange={(e) => handlechange(e.target.value)} className="form-control" placeholder="search here" aria-label="Username" aria-describedby="addon-wrapping" />
        </div>
      </Container>

      {/* product area */}

      {

        showcart ? <Cart cart={cart} /> :
          <Container>
            <Grid container spacing={4}>
              {copy && copy.length ?
                copy.map((v, i) => (

                  <Grid item lg={3} key={i}>
                    <Card sx={{ maxWidth: 345 }}>
                      <CardMedia
                        sx={{ height: 140 }}
                        image={v.image}
                        title="green iguana"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          {v.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Lizards are a widespread group of squamate reptiles, with over 6,000
                          species, ranging across all continents except Antarctica
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <Button size="small">Share</Button>
                        <Button variant='contained' size="small" onClick={() => addcart(v)}>Add to cart</Button>
                      </CardActions>
                    </Card>
                  </Grid>

                ))
                : "empty data"
              }
            </Grid>
          </Container>



                  
      }







    </div>






  )
}

export default Header
