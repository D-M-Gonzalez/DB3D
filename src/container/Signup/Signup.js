import React, {useState} from 'react'
import { Grid, Typography, Paper, Button, useMediaQuery, useTheme } from '@mui/material';
import fondo4 from '../../img/fondo4.jpg';
import NewUserForm from '../../components/Form/NewUserForm';
import { blurSignupValidation, changeSignupValidation, submitValidation } from '../../modules/Validation';
import { userDataFields } from '../../data/userDataFields';
import { createUser } from '../../controllers/createUser';
import { useNavigate } from 'react-router-dom';
import Navigate from '../../modules/Navigator';
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { customTheme } from '../../MuiTheme';

const MySwal = withReactContent(Swal);

const background1 = {
	width:"100vw",
	height:"1000px",
	backgroundImage:`url(${fondo4})`,
	backgroundSize:"cover",
}

export default function Register() {
	const [userData, setUserData] = useState(userDataFields)
	const nav = useNavigate()
	const theme = useTheme(customTheme)
    const mediumDevices = useMediaQuery(theme.breakpoints.up('md'))
    const largeDevices = useMediaQuery(theme.breakpoints.up('lg'))

	const handleChange = (event) => {
		changeSignupValidation(userData,setUserData,event)
	}

	const handleBlur = (event) => {
		blurSignupValidation(userData,setUserData,event)
	}

	const handleClick = name => async () => {
		if(name.action === "accept"){
			const error = submitValidation(userData,setUserData,"register")
			if(!error){
				const response = await createUser(userData);
				if(response.status === 200){
					nav(Navigate("login"))
				} else {
					MySwal.fire({
						title: <strong>{response.message}!</strong>,
						showConfirmButton: true,
						confirmButtonText: "Okay",
					  })  
				}
			}
		}
		if(name.action === "cancel"){
			nav(Navigate("ALL"))
		}
	}

  return (
    <>
    	<div style={background1}>
			<Grid container justifyContent="center">
				<Grid item container mt={10} xs={12} justifyContent="center">
					<Typography fontWeight={700} fontSize={{lg:50,md:40,xs:20}}>Registrar nuevo usuario</Typography>
				</Grid>
				<Grid item container mt={10} xs={12} justifyContent="center">
					<Paper elevation={10}>
						<Grid item container xs={12} mt={3} justifyContent="center">
							<Typography fontSize={{lg:25,md:20,xs:15}}>Ingresa tus datos:</Typography>
						</Grid>
						<Grid item container xs={12} justifyContent="center">
						<NewUserForm 
							userData={userData} 
							fields={Object.entries(userDataFields).filter((data)=>data[1].mode.indexOf("register") !== -1)} 
							handleBlur={handleBlur} 
							handleChange={handleChange}
							/>				
						</Grid>
						<Grid item container mt={5} mb={3} xs={12}justifyContent="center">
							<Grid item xs={2}/>
							<Grid item container xs={2} justifyContent="center">
								<Button
									variant="db3d"
									onClick={handleClick({action:"accept"})}
									size={!mediumDevices ? "small" : !largeDevices ? "medium" : "large"}
									>
									<Typography fontWeight={700} fontSize={{lg:20,md:18,sm:16}}>Aceptar</Typography>
								</Button>
							</Grid>
							<Grid item xs/>
							<Grid item container xs={2} justifyContent="center">
								<Button
									variant="db3d"
									onClick={handleClick({action:"cancel"})}
									size={!mediumDevices ? "small" : !largeDevices ? "medium" : "large"}
									>
									<Typography fontWeight={700} fontSize={{lg:20,md:18,sm:16}}>Volver</Typography>
								</Button>
							</Grid>
							<Grid item xs={2}/>
						</Grid>
					</Paper>
				</Grid>
			</Grid>
		</div>
    </>
  )
}
