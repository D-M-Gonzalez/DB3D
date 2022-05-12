import React, {useState, useEffect, useRef} from 'react'
import {Grid, Typography, Box, Divider, useTheme, useMediaQuery} from '@mui/material/';
import NavBar from '../../components/NavBar/NavBar';
import { useNavigate, Outlet, useSearchParams, useLocation } from 'react-router-dom';
import Context from '../../store/Context';
import Footer from '../Footer/Footer';

export default function Layout() {
    const theme = useTheme()
    const smallDevices = useMediaQuery(theme.breakpoints.up('sm'))
    const location = useLocation()
    const navigate = useNavigate()
    const layoutRef = useRef()

    useEffect(()=>{
        location.pathname === '/' && navigate('/home?section=us')
    },[])

    return (
        <Grid container ref={layoutRef}>
            <Grid item container xs={12}>
                {smallDevices ? 
                    <Grid item container xs={12} sx={{backgroundColor:"white"}}>
                        <Grid item container lg={2} md={2.5} sm={1.4} justifyContent="center">
                            <Box component="img" src="/assets/LogoDB3D2Black.png" sx={{height:"8vw", width:"auto"}}/>
                        </Grid>
                        <Grid item lg={2} md={1.5} sm={0.1}/>
                        <Grid item container lg={8} md={8} sm={10.5}  alignItems="center">
                            <NavBar/>
                        </Grid>
                    </Grid>
                :
                <Grid item container xs={12}>
                    <NavBar/>
                </Grid>              
            }
            </Grid>
            <Grid item xs={12}>
                <Divider/>
            </Grid>
            <Grid item container xs={12} justifyContent="center">
                <Context layoutRef={layoutRef}/>
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
