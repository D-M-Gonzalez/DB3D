import React, {useEffect, useRef, useState} from 'react'
import {Grid, Box, Divider, useTheme, useMediaQuery} from '@mui/material/';
import NavBar from '../NavBar/NavBar';
import { useNavigate, useLocation } from 'react-router-dom';
import Context from '../../store/Context';
import Footer from '../Footer/Footer';
import Navigate from '../../modules/Navigator';

export default function Layout() {
    const [totalItems, setTotalItems] = useState()
    const theme = useTheme()
    const smallDevices = useMediaQuery(theme.breakpoints.up('sm'))
    const location = useLocation()
    const nav = useNavigate()
    const layoutRef = useRef()

    useEffect(()=>{
        location.pathname === '/' && nav(Navigate("ALL"))
    },[])

    return (
        <Grid container ref={layoutRef}>
            <Grid item container xs={12}>
                {smallDevices ? 
                    <Grid item container xs={12} sx={{backgroundColor:"white"}}>
                        <Grid item container lg={2} md={2.5} sm={1.2} justifyContent="center">
                            <Box component="img" src="/assets/LogoDB3D2Black.png" sx={{height:"8vw", width:"auto"}}/>
                        </Grid>
                        <Grid item lg={1} md={0.5}/>
                        <Grid item container lg={9} md={9} sm={10.8}  alignItems="center">
                            <NavBar totalItems={totalItems}/>
                        </Grid>
                    </Grid>
                :
                <Grid item container xs={12}>
                    <NavBar totalItems={totalItems}/>
                </Grid>              
            }
            </Grid>
            <Grid item xs={12}>
                <Divider/>
            </Grid>
            <Grid item container xs={12} justifyContent="center">
                <Context layoutRef={layoutRef} totalItems={setTotalItems}/>
            </Grid>
            <Grid item xs={12}>
                <Divider/>
            </Grid>
            <Grid item xs={12}>
                <Footer/>
            </Grid>
        </Grid>
    )
}
