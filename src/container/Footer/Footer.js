import React from 'react';
import {Grid,Box,Typography,Divider} from '@mui/material';

export default function Footer() {
  return (
    <Grid container sx={{backgroundColor:"white"}}>
        <Grid item container mt={2} xs={12}>
            <Grid item container mt={3} md={3} sm={6} justifyContent="center">
                <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                >
                    <Box component="img" src='/assets/envios.png' sx={{height:30}}/>
                    <Typography>Envíos a CABA</Typography>
                    <Typography ml={5} mr={5} paragraph={true} fontSize={{xs:10}}>Los productos se entregan en 3 a 5 días hábiles</Typography>
                </Box>
            </Grid>
            <Grid item container mt={3} md={3} sm={6} justifyContent="center">
                <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                >
                    <Box component="img" src='/assets/tarjetas.png' sx={{height:30}}/>
                    <Typography>Medios de pago</Typography>
                    <Typography ml={5} mr={5} paragraph={true} fontSize={{xs:10}}>Aceptamos pagos por Mercado Pago, transferencia y efectivo</Typography>
                </Box>
            </Grid>
            <Grid item container md={4} sm={6} justifyContent="center">
                <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                >
                    <Typography fontSize={{xs:20}}>Contacto</Typography>
                    <Box
                        display="flex"
                        flexDirection="row"
                        alignItems="center"
                        mt={2}
                    >
                        <Box component="img" src='/assets/ubicacion.jpg' sx={{height:40}}/>
                        <Typography fontSize={{xs:16}}>Villa Lugano, CABA.</Typography>
                    </Box>
                    <Box
                        display="flex"
                        flexDirection="row"
                        alignItems="center"
                        mt={2}
                    >
                        <Box component="img" src='/assets/whatsapp.png' sx={{height:30}}/>
                        <Typography ml={1} fontSize={{xs:16}}>+54 11 66186183</Typography>
                    </Box>
                    <Box
                        display="flex"
                        flexDirection="row"
                        alignItems="center"
                        mt={2}
                    >
                        <Box component="img" src='/assets/mail.png' sx={{height:30}}/>
                        <Typography ml={1} fontSize={{xs:16}}>dami.m.gonza@gmail.com</Typography>
                    </Box>
                </Box>
            </Grid>
            <Grid item container md={2} sm={6} justifyContent="center">
                <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                >
                    <Typography fontSize={{xs:20}}>¡Seguinos!</Typography>
                    <Box component="img" src='/assets/facebook.png' sx={{height:60}}/>
                    <Box component="img" src='/assets/instagram.png' sx={{height:40}}/>
                </Box>
            </Grid>
        </Grid>
        <Grid item container mt={2} xs={12}>
            <Divider style={{width:'100%'}} />
        </Grid>
        <Grid item mb={2} container mt={2} xs={12}>
                <Box
                    display="flex"
                    flexDirection="row"
                    alignItems="center"
                >
                    <Typography ml={3} fontSize={{xs:18}}>Powered by:</Typography>
                    <Box ml={3} component="img" src='/assets/LogoDMGweb.png' sx={{height:24}}/>
                </Box>
        </Grid>
    </Grid>
  )
}
