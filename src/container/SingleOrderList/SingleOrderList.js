import React, {useState,useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { Grid } from '@mui/material';
import { findOrderById } from '../../controllers/findOrderById';
import OrderTable from '../../components/Table/OrderTable';
import fondo5 from '../../img/fondo5.jpg';
import Loading from '../../components/Loading/Loading';
import Error404 from '../../components/Error404/Error404';

const background1 = {
	width:"100vw",
	minHeight:"800px",
	backgroundImage:`url(${fondo5})`,
	backgroundSize:"cover",
}

export default function SingleOrderList() {
	const [productList, setProductList] = useState()
    const params = useParams()
    const nav = useNavigate()

	useEffect(()=>{
        const fillProductList = async () => {
            const response = await findOrderById(params.id)
            setProductList(response)
        }

        fillProductList();
    },[params.id])


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
            <Loading />	
		)
	} else if(productList && productList.status !== 200) {
        return (
            <Error404 message={productList.message}/>
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