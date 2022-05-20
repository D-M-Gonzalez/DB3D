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
		console.log(globalData)
    },[globalData])

	const fillProductList = () => {
		setProductList(globalData)
	}

	const handleClick = name => (event) => {
		name.action === "buy" && alert("compraste!, pero todavía no funciona ;)")
		if(name.action === "clear"){
			globalData.update({...globalData,cartList:[]});
			setProductList({})
		}
		name.action === "back" && nav(Navigate("ALL"))
		if(name.action === "delete"){
			let itemToDelete = []
			globalData.cartList.forEach((item)=>{
				item.id !== name.id && itemToDelete.push(item)
			})
			globalData.update({...globalData,cartList:itemToDelete});
		}
	}

	const calculateTotal = () => {
		let total = 0;
		Array.from(productList.cartList).forEach((product)=>{
			total = total + (product.price * product.cant)
		})
		return total
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
						<Typography fontWeight={700} fontSize={{lg:40,md:35,sm:30}}>Checkout</Typography>
					</Grid>
					{productList.cartList.length > 0 ? 
					<>
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
					</>
					:
					<Grid item container xs={12} justifyContent="center" alignItems="center" sx={{height:"200px"}}>
						<Typography fontSize={{lg:30,md:25,sm:20}}>Oops! Todavía no has agregado ningún producto!</Typography>
					</Grid>
				}
					<Grid item container mt={2} mb={2} xs={12}>
						<Grid item xs/>
						<Grid item container xs={4} justifyContent="center">
							<Button
								variant="db3d"
								onClick={handleClick({action:"buy"})}
								disabled= {!productList.cartList.length > 0}
								>
								<Typography fontWeight={700} fontSize={{lg:20,md:18,sm:16}}>Confirmar compra</Typography>
							</Button>
						</Grid>
						<Grid item container xs={2} justifyContent="center">
							<Button
								variant="db3d"
								onClick={handleClick({action:"back"})}
								>
								<Typography fontWeight={700} fontSize={{lg:20,md:18,sm:16}}>Volver</Typography>
							</Button>
						</Grid>
						<Grid item container xs={3} justifyContent="center">
							<Button
								variant="db3d"
								onClick={handleClick({action:"clear"})}
								disabled= {!productList.cartList.length > 0}
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
