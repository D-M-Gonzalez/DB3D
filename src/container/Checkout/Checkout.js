import React, {useState,useEffect,useContext} from 'react'
import { Box, Grid, Typography, Paper, TextField, Button, Backdrop, CircularProgress, useTheme, useMediaQuery } from '@mui/material';
import CheckoutTable from '../../components/Table/CheckoutTable';
import { Global } from '../../App';
import Navigate from '../../modules/Navigator';
import { useNavigate } from 'react-router-dom';

export default function Checkout() {
	const globalData = useContext(Global);
	const [productList, setProductList] = useState({})
	const nav = useNavigate()

	useEffect(()=>{   
        if(globalData){
            try{
                fillProductList()        
            } catch (error){
                console.log(error)
            }
        }
    },[globalData])

	const fillProductList = () => {
		let tempArray = []
		globalData.cartList.forEach((cartItem)=>{
			let itemToAdd = globalData.products.find((item)=>{
				return item.data.id === cartItem.id
			})
			itemToAdd && tempArray.push({
				product:itemToAdd,
				cant:cartItem.cant || 1,
			})
		})
		setProductList(tempArray)
	}

	const handleClick = name => (event) => {
		name === "buy" && alert("compraste!, pero todavía no funciona ;)")
		if(name === "clear"){
			globalData.update({...globalData,cartList:[]});
			setProductList({})
		}
		name === "back" && nav(Navigate("MEDICINA"))
	}

	const calculateTotal = () => {
		let total = 0;
		Array.from(productList).forEach((product)=>{
			total = total + (product.product.data.price * product.cant)
		})
		return total
	}

    if(!productList){
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
						<Typography fontWeight={700} fontSize={{lg:40,md:35,sm:30}}>Checkout</Typography>
					</Grid>
					<Grid item container mt={2} xs={12} justifyContent="center">
						<CheckoutTable list={productList} handleClick={handleClick}/>
					</Grid>
					<Grid item xs={8}/>
					<Grid item container xs={3}>
						<Paper>
							<Box
								display="flex"
								flexDirection="row"
								>
								<Typography ml={1} mr={1} fontSize={{lg:18,md:16,sm:14}}>Total</Typography>
								<Typography fontWeight={600} fontSize={{lg:18,md:16,sm:14}}>
									{calculateTotal()}
								</Typography>
								<Typography fontWeight={600} fontSize={{lg:18,md:16,sm:14}}>$</Typography>
							</Box>
						</Paper>
					</Grid>
					<Grid item xs={1}/>
					<Grid item container mt={2} mb={2} xs={12}>
						<Grid item xs/>
						<Grid item container xs={4} justifyContent="center">
							<Button
								variant="db3d"
								onClick={handleClick("buy")}
								>
								<Typography fontWeight={700} fontSize={{lg:20,md:18,sm:16}}>Confirmar compra</Typography>
							</Button>
						</Grid>
						<Grid item container xs={2} justifyContent="center">
							<Button
								variant="db3d"
								onClick={handleClick("back")}
								>
								<Typography fontWeight={700} fontSize={{lg:20,md:18,sm:16}}>Volver</Typography>
							</Button>
						</Grid>
						<Grid item container xs={3} justifyContent="center">
							<Button
								variant="db3d"
								onClick={handleClick("clear")}
								>
								<Typography fontWeight={700} fontSize={{lg:20,md:18,sm:16}}>Limpiar lista</Typography>
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
