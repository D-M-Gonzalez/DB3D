import React, {useState, useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import {Grid, Box, AppBar, Toolbar, useMediaQuery, useTheme} from '@mui/material';
import MenuNavBar from '../../components/Menu/MenuNavBar';
import CartWidget from '../../components/Buttons/CartWidget';
import Navigator from '../../modules/Navigator';
import DrawerNavBar from '../../components/Menu/DrawerNavBar';
import { menuCategories } from '../../data/menuCategories';
import { customTheme } from '../../MuiTheme';
import DrawerUser from '../../components/Menu/DrawerUser';
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { Global } from '../../App';

const MySwal = withReactContent(Swal);

export default function NavBar() {
    const globalData = useContext(Global);
    const [anchorMenu, setAnchorMenu] = useState(null);
    const [openMenu, setOpenMenu] = useState(false);
    const [openDrawer, setOpenDrawer] = useState({
        user: false,
        menu: false,
    })
    const theme = useTheme(customTheme)
    const smallDevices = useMediaQuery(theme.breakpoints.up('sm'))
    const mediumDevices = useMediaQuery(theme.breakpoints.up('md'))
    const largeDevices = useMediaQuery(theme.breakpoints.up('lg'))
    const nav = useNavigate();

    const handleClick = (event) => {
        if(event.currentTarget.id === "checkout"){
            nav(Navigator(event.currentTarget.id))
        } else {
            setAnchorMenu(event.currentTarget);
            event.currentTarget.id && setOpenMenu(event.currentTarget.id);
        }
    };

    const handleClose = (event) => {
        event.type === 'click' && setOpenMenu("")
    };
    const handleClickMenu = (name) => {
        if(name === "logout"){
            MySwal.fire({
                title: "¿Estas seguro que quieres salir?",
                showDenyButton: true,
                showConfirmButton: true,
                confirmButtonText: "Salir",
                denyButtonText: "Cancelar",
              }).then(async (result) => {
                if (result.isConfirmed) {
                    localStorage.clear()
                    nav(Navigator("NOSOTROS"))
                    globalData.update({...globalData,cartList:[]});
                }
              });
        } else {
            nav(Navigator(name))
        }
    }
    const handleDrawer = (state) => {
        setOpenDrawer({...openDrawer,[state.id]:state.value})
    }
  return (
        <AppBar position="static" color='secondary' elevation={0} sx={{height:40, backgroundColor:"white"}}>
            <Toolbar>
                <Grid container alignItems="center" mt={{xs:-2,sm:-3}}>
                    {smallDevices ? 
                    <Grid item container lg={7.5} md={7.5} sm={7} xs={5} justifyContent="flex-end">
                        <Box
                            display="flex"
                            flexDirection="row"
                            justifyContent='space-around'
                            sx={{width:"100%"}}
                            >
                            <MenuNavBar 
                                name={"Inicio"} 
                                anchor={anchorMenu} 
                                open={openMenu}
                                size={!mediumDevices ? "small" : !largeDevices ? "medium" : "large"}
                                handleClick={handleClick} 
                                handleClickMenu={handleClickMenu} 
                                handleClose={handleClose} 
                                categories={menuCategories.inicio.subcategories}
                                />
                            <MenuNavBar 
                                name={"Catálogo"} 
                                anchor={anchorMenu} 
                                open={openMenu}
                                size={!mediumDevices ? "small" : !largeDevices ? "medium" : "large"}
                                handleClick={handleClick} 
                                handleClickMenu={handleClickMenu} 
                                handleClose={handleClose} 
                                categories={menuCategories.catalogo.subcategories}
                                />
                            <MenuNavBar 
                                name={"Contacto"} 
                                anchor={anchorMenu} 
                                open={openMenu}
                                size={!mediumDevices ? "small" : !largeDevices ? "medium" : "large"}
                                handleClick={handleClick} 
                                handleClickMenu={handleClickMenu} 
                                handleClose={handleClose} 
                                categories={menuCategories.contacto.subcategories}
                                />
                        </Box>
                    </Grid>
                    :
                    <Grid item container lg={6} md={6} sm={6} ml={-2} xs={3}>
                        <DrawerNavBar 
                            handleDrawer={handleDrawer} 
                            openDrawer={openDrawer} 
                            handleClickMenu={handleClickMenu} 
                            menuItems={menuCategories}
                            />
                    </Grid>
                    }
                    <Grid item container lg={2.5} md={2.5} sm={3} xs={6}>
                        <CartWidget 
                            size={!mediumDevices ? "small" : !largeDevices ? "medium" : "large"}
                            handleClick={handleClick}
                            /> 
                    </Grid>
                    <Grid item container lg={2} md={2} sm={2} xs={3}>
                        <DrawerUser 
                            handleDrawer={handleDrawer} 
                            openDrawer={openDrawer} 
                            handleClickMenu={handleClickMenu} 
                            menuItems={menuCategories} 
                            name={JSON.parse(localStorage.getItem("user"))}
                            size={!mediumDevices ? "small" : !largeDevices ? "medium" : "large"}
                            />
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
  );
}