import React, {useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Grid from '@mui/material/Grid';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import { InputBase } from '@mui/material';
import { Paper } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import MenuNavBar from './Menu/MenuNavBar';
import CartWidget from './Buttons/CartWidget';

export default function NavBar() {
    const [search, setSearch] = useState();

    const handleChange = (event) => {
		setSearch(event.target.value);
	}


  return (
      <AppBar position="static" sx={{backgroundColor:"Violet"}}>
        <Toolbar>
            <Grid container alignItems="center">
                <Grid item xs={1} >
                    <MenuNavBar name="INICIO" categories={["NOSOTROS","NUESTROS EQUIPOS","NUESTROS PRODUCTOS"]}/>
                </Grid>
                <Grid item xs={1.5} >
                    <MenuNavBar name="CATÁLOGO" categories={["ACCESORIOS","BIJOU","DECORATIVOS","MEDICINA","OTROS"]}/>
                </Grid>
                <Grid item xs={1.5} >
                    <MenuNavBar name="DISEÑOS" categories={["DISEÑOS 2D","DISEÑOS 3D","DISEÑOS ESPECIALES"]}/>
                </Grid>
                <Grid item xs={1.5} >
                    <MenuNavBar name="CONTACTO" categories={["REDES SOCIALES","¿DONDE ESTAMOS?"]}/>
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