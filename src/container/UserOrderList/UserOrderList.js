import React, {useState,useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { Grid, Paper, Backdrop, CircularProgress, Typography } from '@mui/material';
import { findUserById } from '../../controllers/findUserById';
import UserOrderTable from '../../components/Table/UserOrderTable';
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

export default function UserOrderList() {
	const [orderList, setOrderList] = useState([])
    const params = useParams()
    const nav = useNavigate()

	useEffect(()=>{
        fillProductList();
    },[])

	const fillProductList = async () => {
        const user = await JSON.parse(localStorage.getItem("user"))
        const response = await findUserById(params.id,`"${user.token}"`);
		setOrderList(response)
	}

    const handleClick = name => async () => {
        name.action === "order" && nav(`/order/${name.id}`)
    }
	
    if(orderList.length < 1){
		return (
            <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
			open={true}
          	>
            <CircularProgress color="inherit" />
          </Backdrop>			
		)
	} else if(orderList && orderList.status !== 200) {
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
                        <UserOrderTable list={orderList.data.orders} handleClick={handleClick}/>
                    </Grid>
                </Grid>
            </div>
        </>
  	)
}
}