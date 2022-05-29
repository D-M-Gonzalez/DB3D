import { CircularProgress, Box } from '@mui/material'
import React from 'react'
import fondo4 from '../../img/fondo4.jpg';

const background1 = {
	width:"94vw",
	height:"70vh",
	backgroundImage:`url(${fondo4})`,
	backgroundSize:"cover",
}

export default function Loading() {
  return (
    <div style={background1}>
        <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            sx={{width:"94vw",height:"70vh",backgroundColor:"rgb(0,0,0,0.2)"}}
        >
            <CircularProgress sx={{color:"white"}}/>
        </Box>
    </div>
  )
}