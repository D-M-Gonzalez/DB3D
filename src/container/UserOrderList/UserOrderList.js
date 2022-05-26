import React, {useState,useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { Grid, Paper, Backdrop, CircularProgress } from '@mui/material';
import { findOrderById } from '../../controllers/findOrderById';
import OrderTable from '../../components/Table/OrderTable';
import { findUserById } from '../../controllers/findUserById';
import UserOrderTable from '../../components/Table/UserOrderTable';
import fondo5 from '../../img/fondo5.jpg';

const background1 = {
	width:"100vw",
	height:"800px",
	backgroundImage:`url(${fondo5})`,
	backgroundSize:"cover",
}

export default function UserOrderList() {
	const [orderList, setOrderList] = useState([])
    const params = useParams()
    const nav = useNavigate()

	useEffect(()=>{
        fillProductList();
    },[])

	const fillProductList = async () => {
        const response = await findUserById(params.id,sessionStorage.getItem("token"))
		setOrderList(response.data.orders)
	}

    const handleClick = name => async () => {
        name.action === "order" && nav(`/order/${name.id}`)
    }
	
    if(Object.keys(orderList).length < 1){
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
        <>
            <div style={background1}>
                <Grid container mt={2} mb={2} justifyContent="center">
                    <Grid item container mt={2} xs={12} justifyContent="center">
                        <UserOrderTable list={orderList} handleClick={handleClick}/>
                    </Grid>
                </Grid>
            </div>
        </>
  	)
}
}