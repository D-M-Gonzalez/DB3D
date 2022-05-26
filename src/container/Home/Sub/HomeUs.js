import React from 'react'
import { Box, Typography } from '@mui/material';
import Reveal from 'react-awesome-reveal'
import { keyframes } from "@emotion/react";
import fondo3 from '../../../img/fondo3.jpg';

const background = {
	width:"95vw",
	height:"65vw",
	backgroundImage:`url(${fondo3})`,
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

export default function HomeUs() {
  return (
    <Reveal keyframes={SlideTop} duration={500} damping="0.5">
        <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            >
            <div style={background}>
                <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    >
                    <Typography mt={{md:4,sm:3,xs:1}} color="white" fontWeight={700} fontSize={{lg:60,md:50,sm:30,xs:18}}>Especialistas en Impresión 3D</Typography>
                    <Typography m={{md:4,sm:3,xs:1}} color="white" fontWeight={700} paragraph={true} fontSize={{lg:30,md:25,sm:18,xs:9.5}}>
                        Somos técnicos en impresión 3D con una amplia experiencia en diseño 3D paramétrico. Realizamos todo tipo de impresiones tanto
                        decorativas como funcionales, como también diseños a pedido, utilizando los mejores materiales a nivel nacional.
                        Todos nuestros diseños estan probados para garantizar su resistencia y funcionalidad.
                    </Typography>
                    <Typography mt={{md:2,sm:2}} color="#FFB6C1" fontWeight={700} fontSize={{lg:60,md:50,sm:35,xs:18}}>¡Traé tu consulta!</Typography>
                </Box>
            </div>
        </Box>
    </Reveal>
  )
}
