import React, {useState} from 'react'
import { Grid, Typography, Paper, Button } from '@mui/material';
import fondo4 from '../../img/fondo4.jpg';
import NewUserForm from '../../components/Form/NewUserForm';
import { changeSignupValidation } from '../../modules/Validation';
import { userDataFields } from '../../data/userDataFields';
import { logInUser } from '../../controllers/loginUser';
import Navigate from '../../modules/Navigator';
import { useNavigate } from 'react-router-dom';
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const background1 = {
	width:"100vw",
	height:"600px",
	backgroundImage:`url(${fondo4})`,
	backgroundSize:"cover",
}

export default function Login() {
	const [userData, setUserData] = useState(userDataFields)
    const nav = useNavigate()

	const handleChange = (event) => {
		changeSignupValidation(userData,setUserData,event)
	}

	const handleClick = name => async () => {
        if(name.action === "accept"){
            const response = await logInUser(userData)
			if (response.status === 200) {
				const userId = JSON.stringify(response.data.id)
				const userName = JSON.stringify(response.data.name)
				const userEmail = JSON.stringify(response.data.email)
				const userToken = JSON.stringify(response.data.accessToken)
				sessionStorage.setItem("id",userId)
                sessionStorage.setItem("user",userName)
				sessionStorage.setItem("email",userEmail)
                sessionStorage.setItem("token",userToken)
                nav(Navigate("ALL"))
			} else {
				MySwal.fire({
					title: <strong>{response.message}!</strong>,
					showConfirmButton: true,
					confirmButtonText: "Okay",
					confirmButtonColor: "forestgreen",
				  })          
			}
        }
	}

  return (
    <>
    	<div style={background1}>
			<Grid container justifyContent="center">
				<Grid item container mt={10} xs={12} justifyContent="center">
					<Typography fontWeight={700} fontSize={{lg:50,md:40,xs:20}}>Acceder al sitio</Typography>
				</Grid>
				<Grid item container mt={10} xs={12} justifyContent="center">
					<Paper sx={{width:"500px"}} elevation={10}>
						<Grid item container xs={12} mt={3} justifyContent="center">
							<Typography fontSize={{lg:25,md:20,xs:15}}>Ingresa tus credenciales:</Typography>
						</Grid>
						<Grid item container xs={12} justifyContent="center">
						<NewUserForm 
							userData={userData} 
							fields={Object.entries(userDataFields).filter((data)=>data[1].mode.indexOf("login") !== -1)} 
							handleChange={handleChange}
							/>				
						</Grid>
						<Grid item container mt={2} mb={3} xs={12}justifyContent="center">
							<Grid item xs={2}/>
							<Grid item container xs={2} justifyContent="center">
								<Button
									variant="db3d"
									onClick={handleClick({action:"accept"})}
									>
									<Typography fontWeight={700} fontSize={{lg:20,md:18,sm:16}}>Aceptar</Typography>
								</Button>
							</Grid>
							<Grid item xs/>
							<Grid item container xs={2} justifyContent="center">
								<Button
									variant="db3d"
									onClick={handleClick({action:"cancel"})}
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