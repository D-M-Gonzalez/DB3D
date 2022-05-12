import React, {useEffect, useRef} from 'react'
import { useSearchParams} from 'react-router-dom';
import { Box, Grid, Typography, Paper, TextField, Button, useTheme, useMediaQuery } from '@mui/material';
import { customTheme } from '../../MuiTheme';
import fondo4 from '../../img/fondo4.png';
import fondo5 from '../../img/fondo5.png';

const background1 = {
	width:"100vw",
	height:"83vw",
	backgroundImage:`url(${fondo4})`,
	backgroundSize:"cover",
}

const background2 = {
	width:"100vw",
	height:"100vw",
	backgroundImage:`url(${fondo5})`,
	backgroundSize:"cover",
}

export default function Contact() {
	const theme = useTheme(customTheme)
    const smallDevices = useMediaQuery(theme.breakpoints.up('sm'))
	const [searchParams, setSearchParams] = useSearchParams();
	const homeRef = [];
	homeRef.push(
		{
			id:useRef(),
			name:"contact_us"
		},
		{
			id:useRef(),
			name:"social_media"
		},
	)

	useEffect(()=>{
        scrollToRef();
    },[searchParams])

	const scrollToRef = () => {
		homeRef.forEach((el)=>{
            if ({...Object.fromEntries([...searchParams])}.section === el.name){
                el.id.current.scrollIntoView({block:'start', behavior: 'smooth'})
            }                
        }); 		
	}


  	return (
		<>
			{smallDevices ? 
			<>
				<div style={background1} ref={homeRef[0].id}>
					<Grid container mt={{md:15,sm:1}} ml={{md:8,sm:5}} sx={{width:"90%"}}>
						<Grid item container md={4} sm={12} justifyContent="center">
							<Box
								display="flex"
								flexDirection="column"
								mt={{md:8,xs:1}}
								mb={{md:2,xs:3}}
							>
								<Typography fontWeight={700} fontSize={30}>
									¿Necesitas ayuda?
								</Typography>
								<Typography fontSize={30} color="#F08080">
									¡Dejanos tu consulta!
								</Typography>
							</Box>
						</Grid>
						<Grid item container md={8} sm={12} justifyContent="center">
							<Paper sx={{width:"50vw"}} elevation={10}>
								<Box
									display="flex"
									flexDirection="column"
									m={{md:8,xs:2}}
								>
									<TextField
										id='nombre'
										variant='outlined'
										label='Nombre o Empresa'
										size='small'
										sx={{mt:1}}
									/>
									<TextField
										id='email'
										variant='outlined'
										label='Email'
										size='small'
										sx={{mt:1}}
									/>
									<TextField
										id='telefono'
										variant='outlined'
										label='Teléfono'
										size='small'
										sx={{mt:1}}
									/>
									<TextField
										id='consulta'
										variant='outlined'
										label='Escribe aquí tu consulta'
										size='small'
										multiline
										rows={4}
										sx={{mt:1}}
									/>
									<Box
										display="flex"
										flexDirection="row"
										mt={{md:4,xs:1}}
										mb={{md:-2,xs:1}}
									>
										<Button
											variant="db3d"
										>
											<Typography fontSize={{md:30,sm:16}} fontWeight={700}>Enviar Mensaje</Typography>
										</Button>
									</Box>
								</Box>					
							</Paper>
						</Grid>
					</Grid>
				</div>
				<div style={background2} ref={homeRef[1].id}>
					<Grid container m={10} sx={{width:"90%"}}>
						<Paper sx={{width:"80vw", backgroundColor:"rgb(255,255,255,0.8)"}} elevation={10}>
							<Box
								display="flex"
								flexDirection="column"
								alignItems="center"
								sx={{width:"80vw"}}
								mt={{md:4,xs:1}}
								>
								<Typography fontWeight={700} fontSize={{lg:50,md:40,sm:30}}>¡Seguinos en nuestras redes!</Typography>
								<Typography fontWeight={700} fontSize={{lg:20,md:14,sm:12}} color="#F08080">Respondemos mensajes por cualquiera de los medios de comunicación</Typography>
								<Typography fontWeight={700} fontSize={{lg:20,md:14,sm:12}} color="#F08080">También puedes llamarnos si deseas realizar una consulta urgente</Typography>
								<Box
									display="flex"
									flexDirection="row"
									alignItems="center"
									mt={{md:4,xs:1}}
									>
									<Box component="img" src='/assets/facebook.png' sx={{height:"5vw",maxHeight:60}}/>
									<Typography fontSize={{lg:20,md:14,sm:12}}>https://www.facebook.com/DB3DProyectos/</Typography>
								</Box>
								<Box
									display="flex"
									flexDirection="row"
									alignItems="center"
									mt={{md:4,xs:1}}
									>
									<Box component="img" src='/assets/instagram.png' sx={{height:"4vw",maxHeight:40}}/>
									<Typography ml={2} fontSize={{lg:20,md:14,sm:12}}>https://www.instagram.com/db3d.proyectos/</Typography>
								</Box>
								<Box
									display="flex"
									flexDirection="row"
									alignItems="center"
									mt={{md:4,xs:1}}
									>
									<Box component="img" src='/assets/whatsapp.png' sx={{height:"4vw",maxHeight:40}}/>
									<Typography ml={2} fontSize={{lg:20,md:14,sm:12}}>+54 11 61661012</Typography>
								</Box>
								<Box
									display="flex"
									flexDirection="row"
									alignItems="center"
									mt={{md:4,xs:1}}
									>
									<Box component="img" src='/assets/mail.png' sx={{height:"4vw",maxHeight:45}}/>
									<Typography ml={2} fontSize={{lg:20,md:14,sm:12}}>dami.m.gonza@gmail.com</Typography>
								</Box>
								<Typography mt={{md:4,xs:1}} fontWeight={700} fontSize={{lg:20,md:14,sm:12}}>Nos encontramos en Villa Lugano, CABA, a metros del club Yupanqui</Typography>
								<Box component="img" src='/assets/mapa.png' m={5} sx={{height:"30vw",maxHeight:300,borderRadius:5}}/>
							</Box>
						</Paper>
					</Grid>
				</div>
			</>
			: //Telefonos
			<div>
					<Grid container mt={2} ref={homeRef[0].id}>
						<Grid item container xs={12} justifyContent="center">
							<Box
								display="flex"
								flexDirection="column"
							>
								<Typography fontWeight={700} fontSize={18}>
									¿Necesitas ayuda?
								</Typography>
								<Typography fontSize={18} color="#F08080">
									¡Dejanos tu consulta!
								</Typography>
							</Box>
						</Grid>
						<Grid item container xs={12} mt={2} justifyContent="center">
							<Paper elevation={10}>
								<Box
									display="flex"
									flexDirection="column"
									m={{md:8,xs:2}}
								>
									<TextField
										id='nombre'
										variant='outlined'
										label='Nombre o Empresa'
										size='small'
										sx={{mt:1}}
									/>
									<TextField
										id='email'
										variant='outlined'
										label='Email'
										size='small'
										sx={{mt:1}}
									/>
									<TextField
										id='telefono'
										variant='outlined'
										label='Teléfono'
										size='small'
										sx={{mt:1}}
									/>
									<TextField
										id='consulta'
										variant='outlined'
										label='Escribe aquí tu consulta'
										size='small'
										multiline
										rows={4}
										sx={{mt:1}}
									/>
									<Box
										display="flex"
										flexDirection="row"
										mt={{md:4,xs:1}}
										mb={{md:-2,xs:1}}
									>
										<Button
											variant="db3d"
										>
											<Typography fontSize={12} fontWeight={400}>Enviar Mensaje</Typography>
										</Button>
									</Box>
								</Box>					
							</Paper>
						</Grid>
					</Grid>
					<Grid container mt={2} justifyContent="center" ref={homeRef[1].id}>
							<Box
								display="flex"
								flexDirection="column"
								alignItems="center"
								mt={{xs:1}}
								>
								<Typography fontWeight={700} fontSize={16}>¡Seguinos en nuestras redes!</Typography>
								<Typography fontWeight={700} fontSize={9} paragraph={true} color="#F08080">
									Respondemos mensajes por cualquiera de los medios de comunicación
								</Typography>
								<Typography fontWeight={700} fontSize={9} paragraph={true} color="#F08080">
									También puedes llamarnos si deseas realizar una consulta urgente
								</Typography>
								<Box
									display="flex"
									flexDirection="row"
									alignItems="center"
									mt={{md:4,xs:1}}
									>
									<Box component="img" src='/assets/facebook.png' sx={{height:"5vw",maxHeight:60}}/>
									<Typography fontSize={9}>https://www.facebook.com/DB3DProyectos/</Typography>
								</Box>
								<Box
									display="flex"
									flexDirection="row"
									alignItems="center"
									mt={{md:4,xs:1}}
									>
									<Box component="img" src='/assets/instagram.png' sx={{height:"4vw",maxHeight:40}}/>
									<Typography ml={2} fontSize={9}>https://www.instagram.com/db3d.proyectos/</Typography>
								</Box>
								<Box
									display="flex"
									flexDirection="row"
									alignItems="center"
									mt={{md:4,xs:1}}
									>
									<Box component="img" src='/assets/whatsapp.png' sx={{height:"4vw",maxHeight:40}}/>
									<Typography ml={2} fontSize={9}>+54 11 61661012</Typography>
								</Box>
								<Box
									display="flex"
									flexDirection="row"
									alignItems="center"
									mt={{md:4,xs:1}}
									>
									<Box component="img" src='/assets/mail.png' sx={{height:"4vw",maxHeight:45}}/>
									<Typography ml={2} fontSize={9}>dami.m.gonza@gmail.com</Typography>
								</Box>
								<Typography mt={{md:4,xs:1}} fontWeight={700} fontSize={10}>Nos encontramos en Villa Lugano, CABA, a metros del club Yupanqui</Typography>
								<Box component="img" src='/assets/mapa.png' m={5} sx={{height:"30vw",maxHeight:300, minHeight:150, borderRadius:5}}/>
							</Box>
					</Grid>
			</div>
		}
		</>
  	)
}