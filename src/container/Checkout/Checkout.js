import React, {useState,useEffect,useContext} from 'react'
import { Grid, Typography, Paper, Button, Backdrop, CircularProgress, useMediaQuery, useTheme} from '@mui/material';
import CheckoutTable from '../../components/Table/CheckoutTable';
import { Global } from '../../App';
import Navigate from '../../modules/Navigator';
import { useNavigate } from 'react-router-dom';
import { userDataFields } from '../../data/userDataFields';
import NewUserForm from '../../components/Form/NewUserForm';
import { blurSignupValidation, changeSignupValidation, submitValidation } from '../../modules/Validation';
import { customTheme } from '../../MuiTheme';
import { findUserById } from '../../controllers/findUserById';
import { createOrder } from '../../controllers/createOrder';
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

export default function Checkout() {
	const {globalData,update} = useContext(Global);
	const [userData, setUserData] = useState(userDataFields)
	const [productList, setProductList] = useState({})
	const [disableFields, setDisableFields] = useState(false)
	const nav = useNavigate()
	const theme = useTheme(customTheme)
	const mediumDevices = useMediaQuery(theme.breakpoints.up('md'))
	const largeDevices = useMediaQuery(theme.breakpoints.up('lg'))

	useEffect(()=>{   
        if(globalData){
            try{
                fillProductList()        
            } catch (error){
                console.log(error)
            }
        }
		if(localStorage.getItem("id") && localStorage.getItem("token")){
			getUserData(JSON.parse(localStorage.getItem("id")),localStorage.getItem("token"))
			setDisableFields(true)
		}
    },[globalData])

	const fillProductList = () => {
		setProductList(globalData)
	}

	const getUserData = async (id,token) => {
		const response = await findUserById(id,token);
		setUserData({...userData,
					email:{
						...userData["email"],
						data: response.data.email,
					},
					repemail:{
						...userData["repemail"],
						data: response.data.email,
					},
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

	const handleClick = name => async () => {
		if(name.action === "buy"){
			const error = submitValidation(userData,setUserData,"checkout")
			if(!error){
				MySwal.fire({
					title: <strong>Confirmar la compra</strong>,
					html: <i>Una vez confirmada, la orden no se puede modificar</i>,
					showDenyButton: true,
					showConfirmButton: true,
					confirmButtonText: "Si, ¡Comprar!",
					denyButtonText: "No!",
				  }).then(async (result) => {
					if (result.isConfirmed) {
						const response = await createOrder(userData,globalData.cartList,localStorage.getItem("token"))
					  Swal.fire({
						title: response.message,
						html: `<div>La id de tu orden es ${response.data.id}</div>
						<div>Puedes verla haciendo click en el siguiente link:</div>
						<a href="http://localhost:3000/order/${response.data.id}">Link a la orden</a>`,
						showConfirmButton: true,
					  }).then(async () => {
						update({...globalData,cartList:[]});
						localStorage.removeItem("items");
						nav(Navigate("ALL"));
					  });
					}
				  });
			}
		}
		if(name.action === "clear"){
			MySwal.fire({
				title: <strong>Limpiar la lista</strong>,
				html: <i>Se eliminaran todos los items del carrito</i>,
				showDenyButton: true,
				showConfirmButton: true,
				confirmButtonText: "Si, ¡Eliminar!",
				denyButtonText: "No!",
			  }).then(async (result) => {
				if (result.isConfirmed) {
					update({...globalData,cartList:[]});
					localStorage.removeItem("items");
					setProductList({});
				}
			  });
		}

		name.action === "back" && nav(Navigate("ALL"))

		if(name.action === "delete"){
			MySwal.fire({
				title: <strong>Limpiar la lista</strong>,
				html: `<i>Se eliminara ${name.name} del carrito</i>`,
				showDenyButton: true,
				showConfirmButton: true,
				confirmButtonText: "Si, ¡Eliminar!",
				denyButtonText: "No!",
			  }).then(async (result) => {
				if (result.isConfirmed) {
					let itemToDelete = []
					globalData.cartList.forEach((item)=>{
						item.id !== name.id && itemToDelete.push(item)
					})
					update({...globalData,cartList:itemToDelete});
				}
			  });
		}
		name.action === "item" && nav(`/detail/${name.id}`)
	}

	const calculateTotal = () => {
		let total = 0;
		Array.from(productList.cartList).forEach((product)=>{
			total = total + (product.price * product.cant)
		})
		return total
	}

	const handleChange = (event) => {
		changeSignupValidation(userData,setUserData,event)
	}

	const handleBlur = (event) => {
		blurSignupValidation(userData,setUserData,event)
	}
	
    if(Object.keys(productList).length < 1){
		return (
            <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
			open={true}
          	>
            <CircularProgress color="inherit" />
          </Backdrop>			
		)
	} else {
  	return (
    	<Grid container mt={2} mb={2} justifyContent="center">
			<Paper sx={{m:5}}>
				<Grid container>
					<Grid item container mt={2} xs={12} justifyContent="center">
						<Typography fontWeight={700} fontSize={{lg:50,md:45,sm:40}}>Checkout</Typography>
					</Grid>
					{productList.cartList.length > 0 ? 
					<>
						<Grid item container mt={2} xs={12} justifyContent="center">
							<CheckoutTable list={productList} handleClick={handleClick} total={calculateTotal()}/>
						</Grid>
					</>
					:
					<Grid item container xs={12} justifyContent="center" alignItems="center" sx={{height:"200px"}}>
						<Typography fontSize={{lg:30,md:25,sm:20}}>Oops! Todavía no has agregado ningún producto!</Typography>
					</Grid>
				}

					<Grid item container mt={2} ml={{lg:10,md:8,sm:4,xs:1}} xs={12}>
						<Typography fontWeight={700} fontSize={{lg:40,md:35,sm:30}}>Datos Personales</Typography>
					</Grid>
					<Grid item container mt={2} ml={{lg:10,md:8,sm:4,xs:1}} xs={12}>
						<Typography fontWeight={700} fontSize={{lg:20,md:18,sm:16}}>Ingresa tus datos para poder continuar</Typography>
					</Grid>
					<Grid item container ml={{lg:10,md:8,sm:4,xs:0}} xs={12}>
						<NewUserForm 
							userData={userData} 
							fields={Object.entries(userDataFields).filter((data)=>data[1].mode.indexOf("checkout") !== -1)} 
							handleBlur={handleBlur} 
							handleChange={handleChange}
							disabled={disableFields}
							/>
					</Grid>
					<Grid item container mt={2} mb={2} xs={12}>
						<Grid item xs/>
						<Grid item container md={4} xs={4} justifyContent="center">
							<Button
								variant="db3d"
								onClick={handleClick({action:"buy"})}
								disabled= {!productList.cartList.length > 0}
								size={!mediumDevices ? "small" : !largeDevices ? "medium" : "large"}
								>
								Confirmar compra
							</Button>
						</Grid>
						<Grid item container md={2} xs={4} justifyContent="center">
							<Button
								variant="db3d"
								onClick={handleClick({action:"back"})}
								size={!mediumDevices ? "small" : !largeDevices ? "medium" : "large"}
								>
								Volver
							</Button>
						</Grid>
						<Grid item container md={3} xs={4} justifyContent="center">
							<Button
								variant="db3d"
								onClick={handleClick({action:"clear"})}
								disabled= {!productList.cartList.length > 0}
								size={!mediumDevices ? "small" : !largeDevices ? "medium" : "large"}
								>
								Limpiar lista
							</Button>
						</Grid>
						<Grid item xs/>
					</Grid>
				</Grid>
			</Paper>
    	</Grid>
  	)
}
}
