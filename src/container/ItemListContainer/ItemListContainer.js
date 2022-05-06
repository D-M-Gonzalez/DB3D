import React, {useState, useEffect} from 'react';
import {Grid,Backdrop, CircularProgress,Typography, Button} from '@mui/material/';
import ItemList from '../Item/ItemList';
import { useOutletContext, useNavigate } from 'react-router-dom';
import { findProducts } from '../../controllers/findProducts';

export default function ItemListContainer(props) {
  	const {createStore, loadStore, categoryChange} = useOutletContext();
	const [store, setStore] = createStore;
	const [items, setItems] = loadStore;
	const [category, setCategory] = categoryChange;
	const [notLoaded, setNotLoaded] = useState(true);
	const nav = useNavigate();

  	useEffect(()=>{
		fetchData().catch(console.error);
	},[])
	
	const fetchData = async () => {
		const response = await findProducts();
		setNotLoaded(false);
		store(response);
	}

	const showDetail = (id) => {
		nav(`/detail/${id}`)
	}

	const handleClick = (event) => {
		category(event.target.name)
	}


	if(notLoaded){
		return (
            <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
			open={notLoaded}
          >
            <CircularProgress color="inherit" />
          </Backdrop>			
		)
	} else {
		return (
		  <Grid container>
			  <Grid item container mt={2} xs={12} justifyContent="center">
				  <Typography fontWeight="bold" color="black" fontSize={30}>Products</Typography>
			  </Grid>
			  <Grid item container mt={2} xs={12} justifyContent="center">
			  	<Grid item>
				  	<Button variant="contained" name="all" onClick={handleClick}>All</Button>
				  </Grid>
				  <Grid item xs={1}/>
				  <Grid item>
				  	<Button variant="contained" name="ford" onClick={handleClick}>Ford</Button>
				  </Grid>
				  <Grid item xs={1}/>
				  <Grid item>
				  	<Button variant="contained" name="peugeot" onClick={handleClick}>Peugeot</Button>
				  </Grid>
				  <Grid item xs={1}/>
				  <Grid item>
				  	<Button variant="contained" name="fiat" onClick={handleClick}>Fiat</Button>
				  </Grid>
				  <Grid item xs={1}/>
				  <Grid item>
				  	<Button variant="contained" name="chevrolet" onClick={handleClick}>Chevrolet</Button>
				  </Grid>
			  </Grid>
			  <Grid item xs={12}>
				  <ItemList items={items} detail={showDetail}/>
			  </Grid>
		  </Grid>
		)
	}
}
