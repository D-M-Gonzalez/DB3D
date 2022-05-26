import React from 'react'
import { Box, Typography, Paper } from '@mui/material';
import Reveal from 'react-awesome-reveal'
import { keyframes } from "@emotion/react";
import fondo1 from '../../../img/fondo1.jpg';

const background = {
	width:"87.5vw",
	height:"65vw",
	backgroundImage:`url(${fondo1})`,
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

export default function HomeProducts() {
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
                name="products"
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
                        <Typography ml={{md:8,sm:3}} mr={{md:8,sm:3}} color="black" fontWeight={700} fontSize={{lg:60,md:50,sm:25,xs:16}}>Todo tipo de piezas y diseños</Typography>
                        <Typography m={{md:3,sm:2,xs:1}} color="black" fontWeight={700} paragraph={true} fontSize={{lg:30,md:25,sm:16,xs:9.5}}>
                            Realizamos trabajos en diferentes areas, como ser la medicina, trabajos para diseños de decoración, trabajos funcionales como repuestos de objetos tales como plásticos
                            que estan en nuestras sillas, mesas, etc. También realizamos trabajos para pastelería y la industria alimenticia.
                        </Typography>
                        <Typography mb={{md:3,sm:2,xs:2}} color="#F08080" fontWeight={700} fontSize={{lg:60,md:50,sm:25,xs:16}}>¡Revisa nuestro catálogo!</Typography>
                    </Box>
                </Paper>
            </Box>
        </Box>
    </Reveal>
  )
}