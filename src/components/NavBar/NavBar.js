import React, {useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Grid from '@mui/material/Grid';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import { InputBase } from '@mui/material';
import { Paper } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import MenuNavBar from '../Menu/MenuNavBar';
import CartWidget from '../Buttons/CartWidget';
import { useNavigate } from 'react-router-dom';

export default function NavBar(props) {
    const [search, setSearch] = useState()
    const nav = useNavigate();

    const handleChange = (event) => {
        setSearch(event.target.value)
		props.search(event.target.value);
	}

    const handleClick = (name) => {
        name === "ALL" && nav("/items/list?page=1&size=10&category=ALL&search=")
        name === "FORD" && nav("/items/list?page=1&size=10&category=FORD&search=")
        name === "PEUGEOT" && nav("/items/list?page=1&size=10&category=PEUGEOT&search=")
        name === "FIAT" && nav("/items/list?page=1&size=10&category=FIAT&search=")
        name === "CHEVROLET" && nav("/items/list?page=1&size=10&category=CHEVROLET&search=")
    }

  return (
      <AppBar position="static" color='primary'>
        <Toolbar>
            <Grid container alignItems="center">
                <Grid item xs={1} >
                    <MenuNavBar name="INICIO" click={handleClick} categories={["HOME","OUR STORES","OUR PRODUCTS"]}/>
                </Grid>
                <Grid item xs={1.5} >
                    <MenuNavBar name="CATÁLOGO" click={handleClick} categories={["ALL","FORD","PEUGEOT","FIAT","CHEVROLET"]}/>
                </Grid>
                <Grid item xs={1.5} >
                    <MenuNavBar name="CONTACTO" click={handleClick} categories={["SOCIAL MEDIA","CONTACT US"]}/>
                </Grid>
                <Grid container item xs={2.5} justifyContent="center">
					<Paper sx={{backgroundColor:"white"}}>
						<InputBase
							sx={{ ml: 1, flex: 1}}
							placeholder="Search"
							inputProps={{ 'aria-label': 'search' }}
							value={search}
							onChange={handleChange}
						/>
						<IconButton type="submit" sx={{ pr: '10px' }} aria-label="search">
							<SearchIcon />
						</IconButton>
					</Paper>
				</Grid>
                <Grid item xs={3.3}/>
                <Grid item xs={0.2}>
                    <CartWidget/> 
                </Grid>
                <Grid item xs={0.5}/>
            </Grid>
        </Toolbar>
      </AppBar>
  );
}