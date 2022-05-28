import React, {useState,useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { Grid, Paper, Backdrop, CircularProgress, Typography } from '@mui/material';
import { findOrderById } from '../../controllers/findOrderById';
import OrderTable from '../../components/Table/OrderTable';
import fondo5 from '../../img/fondo5.jpg';

const background1 = {
	width:"100vw",
	minHeight:"800px",
	backgroundImage:`url(${fondo5})`,
	backgroundSize:"cover",
}

const background2 = {
	width:"100vw",
	minHeight:"1200px",
	backgroundImage:`url(${fondo5})`,
	backgroundSize:"cover",
}

export default function SingleOrderList() {
	const [productList, setProductList] = useState()
    const params = useParams()
    const nav = useNavigate()

	useEffect(()=>{
        fillProductList();
    },[])

	const fillProductList = async () => {
        const response = await findOrderById(params.id)
		setProductList(response)
	}

	const calculateTotal = () => {
		let total = 0;
		Array.from(productList.data.products).forEach((product)=>{
			total = total + (product.price * product.cant)
		})
		return total
	}

    const handleClick = name => async () => {
        name.action === "item" && nav(`/detail/${name.id}`)
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
	} else if(productList && productList.status !== 200) {
        return (
        <div style={background2}>
            <Grid container>
                <Grid item container xs={12} sx={{height:1000}} justifyContent="center" alignItems="center">
                    <Paper sx={{borderRadius:"20px"}}>
                        <Typography fontSize={80} m={5} fontWeight={700}>¡El Item que estas buscando no existe!</Typography>
                    </Paper>
                </Grid>
            </Grid>
        </div>
        )
    } else {
  	return (
        <>
            <div style={background1}>
                <Grid container mt={2} mb={2} justifyContent="center">
                    <Grid item container mt={2} xs={12} justifyContent="center">
                        <OrderTable list={productList.data.products} total={calculateTotal()} handleClick={handleClick}/>
                    </Grid>
                </Grid>
            </div>
        </>
  	)
}
}