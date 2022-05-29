import { Container, Typography } from '@mui/material'
import React from 'react'
import fondo4 from '../../img/fondo4.jpg';

const background1 = {
	width:"100vw",
	height:"1000px",
	backgroundImage:`url(${fondo4})`,
	backgroundSize:"cover",
}

export default function Error404(props) {
  return (
    <div style={background1}>
        <Container sx={{width:"50vw"}}>
            <Typography fontWeight={700} mt={30} fontSize={{lg:60, md:50, sm:45, xs:30}}>{props.message}</Typography>
        </Container>
    </div>
  )
}
