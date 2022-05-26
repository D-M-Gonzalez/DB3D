import React from 'react'
import { Box, Typography, Paper } from '@mui/material';
import Reveal from 'react-awesome-reveal'
import { keyframes } from "@emotion/react";
import fondo2 from '../../../img/fondo2.jpg';

const background = {
	width:"90vw",
	height:"65vw",
	backgroundImage:`url(${fondo2})`,
	backgroundSize:"cover",
}

const SlideTop = keyframes`
	from {
    opacity: 0;
    transform: translate3d(0px, 100px, 0px);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

export default function HomeGear() {
  return (
    <Reveal keyframes={SlideTop} duration={500} damping="0.5">
        <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            >
            <Box 
                display="flex"
                flexDirection="column"
                alignItems="center"
                name="gear"
                m={{md:10,sm:3,xs:1}}
                mt={{xs:3}}
                sx={{width:"70%"}}
                >
                <Paper
                    elevation={10}
                >
                <div style={background}/>
                <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    >
                    <Typography mt={{md:3,sm:2,xs:1}} color="black" fontWeight={700} fontSize={{lg:60,md:50,sm:25,xs:16}}>Equipos de última generación</Typography>
                    <Typography m={{md:3,sm:2,xs:1}} color="black" fontWeight={700} paragraph={true} fontSize={{lg:30,md:25,sm:16,xs:9.5}}>
                        Nuestras herramientas nos permiten realizar todo tipo de impresiones, como también relevamiento de piezas existentes para su duplicación.
                        Poseemos del mejor software de diseño 3D para poder realizar cualquier trabajo solicitado, respetando las tolerancias geométricas exigidas por el cliente.
                        Utilizamos material de alta calidad, siendo el mejor disponible en la Argentina, garantizando que nuestros productos sean de la calidad esperada.
                    </Typography>
                    </Box>
                </Paper>
            </Box>
        </Box>
    </Reveal>
  )
}