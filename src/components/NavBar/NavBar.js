import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import {Grid, AppBar, Toolbar, useMediaQuery, useTheme} from '@mui/material';
import MenuNavBar from '../Menu/MenuNavBar';
import CartWidget from '../Buttons/CartWidget';
import Navigator from '../../modules/Navigator';
import DrawerNavBar from '../Menu/DrawerNavBar';
import { menuCategories } from '../../data/menuCategories';
import { customTheme } from '../../MuiTheme';

export default function NavBar(props) {
    const [anchorMenu, setAnchorMenu] = useState(null);
    const [openMenu, setOpenMenu] = useState(false);
    const [openDrawer,setOpenDrawer] = useState()
    const theme = useTheme(customTheme)
    const smallDevices = useMediaQuery(theme.breakpoints.up('sm'))
    const nav = useNavigate();

    const handleClick = (event) => {
        setAnchorMenu(event.currentTarget);
        event.currentTarget.id && setOpenMenu(event.currentTarget.id);
    };
    const handleClose = (event) => {
        event.type === 'click' && setOpenMenu("")
    };
    const handleClickMenu = (name) => {
        nav(Navigator(name))
    }
    const handleDrawer = state => () => {
        setOpenDrawer(state);
    }

  return (
        <AppBar position="static" color='secondary' elevation={0} sx={{height:40, backgroundColor:"white"}}>
            <Toolbar>
                <Grid container alignItems="center" mt={{xs:-2,sm:-3}}>
                    {smallDevices ? 
                    <Grid item container lg={8} md={8} sm={8} xs={7} alignItems="center">
                        <Grid item xs={3} >
                            <MenuNavBar name={"Inicio"} anchor={anchorMenu} open={openMenu} handleClick={handleClick} handleClickMenu={handleClickMenu} handleClose={handleClose} categories={menuCategories.inicio.subcategories}/>
                        </Grid>
                        <Grid item xs={4.5} >
                            <MenuNavBar name={"Catálogo"} anchor={anchorMenu} open={openMenu} handleClick={handleClick} handleClickMenu={handleClickMenu} handleClose={handleClose} categories={menuCategories.catalogo.subcategories}/>
                        </Grid>
                        <Grid item xs={4.5} >
                            <MenuNavBar name={"Contacto"} anchor={anchorMenu} open={openMenu} handleClick={handleClick} handleClickMenu={handleClickMenu} handleClose={handleClose} categories={menuCategories.contacto.subcategories}/>
                        </Grid>
                    </Grid>
                    :
                    <Grid item container lg={8} md={8} sm={8} xs={5}>
                            <DrawerNavBar handleDrawer={handleDrawer} openDrawer={openDrawer} handleClickMenu={handleClickMenu} menuItems={menuCategories} />
                    </Grid>
                    }
                    <Grid item lg={0.1} md={0.1} sm={0.1} xs={0.5}/>
                    <Grid item container lg={3.2} md={3.2} sm={3.2} xs={6}>
                        <CartWidget handleClick={handleClickMenu}/> 
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
  );
}