import React, {useEffect, useState} from 'react'
import { Grid, Typography, Paper, Button } from '@mui/material';
import fondo4 from '../../img/fondo4.jpg';
import NewUserForm from '../../components/Form/NewUserForm';
import { blurSignupValidation, changeSignupValidation, submitValidation } from '../../modules/Validation';
import { userDataFields } from '../../data/userDataFields';
import { useNavigate } from 'react-router-dom';
import Navigate from '../../modules/Navigator';
import { findUserById } from '../../controllers/findUserById';
import { modifyUser } from '../../controllers/modifyUserById';
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const background1 = {
	width:"100vw",
	height:"1000px",
	backgroundImage:`url(${fondo4})`,
	backgroundSize:"cover",
}

export default function ModifyUser() {
	const [userData, setUserData] = useState(userDataFields)
	const [disableFields, setDisableFields] = useState(true)
	const nav = useNavigate()

	useEffect(()=>{
		if(localStorage.getItem("user")){
			getUserData()
			setDisableFields(false)
		}
	},[])

	const getUserData = async () => {
		const user = await JSON.parse(localStorage.getItem("user"))
		const response = await findUserById(user.id,`"${user.token}"`);
		setUserData({...userData,
					name:{
						...userData["name"],
						data: response.data.name,
					},
					surname:{
						...userData["surname"],
						data: response.data.surname,
					},
					phone:{
						...userData["phone"],
						data: response.data.phone,
					},
				}
			)
		}

	const handleChange = (event) => {
		changeSignupValidation(userData,setUserData,event)
	}

	const handleBlur = (event) => {
		blurSignupValidation(userData,setUserData,event)
	}

	const handleClick = name => async () => {
		if(name.action === "accept"){
			const error = submitValidation(userData,setUserData,"modify")
			if(!error){
				const user = await JSON.parse(localStorage.getItem("user"))
				const response = await modifyUser(userData,user.id,`"${user.token}"`);
				if(response.status === 200){
					MySwal.fire({
						title: <strong>{response.message}!</strong>,
						showConfirmButton: true,
						confirmButtonText: "Okay",
					  }).then(async () => {
						  	user.id = response.data.id
							user.name = response.data.name
							user.email = response.data.email
							user.token = response.data.accessToken
							localStorage.setItem("user",JSON.stringify(user))
							nav(Navigate("ALL"))
					  })
				} else {
					MySwal.fire({
						title: <strong>{response.message}!</strong>,
						showConfirmButton: true,
						confirmButtonText: "Okay",
					})
				}
			}
		}
	}

  return (
    <>
    	<div style={background1}>
			<Grid container justifyContent="center">
				<Grid item container mt={10} xs={12} justifyContent="center">
					<Typography fontWeight={700} fontSize={{lg:50,md:40,xs:20}}>Modificar mis datos</Typography>
				</Grid>
				<Grid item container mt={10} xs={12} justifyContent="center">
					<Paper sx={{width:"500px"}} elevation={10}>
						<Grid item container xs={12} mt={3} justifyContent="center">
							<Typography fontSize={{lg:25,md:20,xs:15}}>Re-ingresa tus datos:</Typography>
						</Grid>
						<Grid item container xs={12} justifyContent="center">
						<NewUserForm 
							userData={userData} 
							fields={Object.entries(userDataFields).filter((data)=>data[1].mode.indexOf("modify") !== -1)} 
							handleBlur={handleBlur} 
							handleChange={handleChange}
							disabled={disableFields}
							/>				
						</Grid>
						<Grid item container mt={5} mb={3} xs={12}justifyContent="center">
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