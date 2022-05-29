import React, {useState,useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { Grid } from '@mui/material';
import { findUserById } from '../../controllers/findUserById';
import UserOrderTable from '../../components/Table/UserOrderTable';
import fondo5 from '../../img/fondo5.jpg';
import Loading from '../../components/Loading/Loading';
import Error404 from '../../components/Error404/Error404';

const background1 = {
	width:"100vw",
	minHeight:"800px",
	backgroundImage:`url(${fondo5})`,
	backgroundSize:"cover",
}

export default function UserOrderList() {
	const [orderList, setOrderList] = useState([])
    const params = useParams()
    const nav = useNavigate()

	useEffect(()=>{
        const fillProductList = async () => {
            const user = await JSON.parse(localStorage.getItem("user"))
            const response = await findUserById(params.id,user.token);
            setOrderList(response)
        }

        fillProductList();
    },[params.id])


    const handleClick = name => async () => {
        name.action === "order" && nav(`/order/${name.id}`)
    }
	
    if(orderList.length < 1 && orderList.status !== 200){
		return (
            <Loading />	
		)
	} else if(orderList && orderList.status !== 200) {
        return (
            <Error404 message={orderList.message}/>
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