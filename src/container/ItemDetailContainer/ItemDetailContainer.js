import { Button, Grid, Typography, Paper, Backdrop, CircularProgress } from '@mui/material';
import React, {useState, useEffect, useContext} from 'react'
import { useParams, useNavigate} from 'react-router-dom';
import DetailItem from '../../components/Item/DetailItem';
import { Global } from '../../App';
import Navigate from '../../modules/Navigator';
import { findProductById } from '../../controllers/findProductById';
import fondo5 from '../../img/fondo5.jpg';

const background1 = {
	width:"100vw",
	height:"1200px",
	backgroundImage:`url(${fondo5})`,
	backgroundSize:"cover",
}

export default function ItemDetailContainer() {
    const {globalData,update} = useContext(Global);
    const [searchedItem, setSearchedItem] = useState();
    const [cant, setCant] = useState(1);
    const [bought, setBought] = useState(false);
    const params = useParams()
    const nav = useNavigate()

    useEffect(()=>{   
        getProductById()
        if(globalData.cartList.find((item)=>{
            return item.id === params.id
        })){
            setBought(true);
        }
    },[])

    const getProductById = async () => {
        const response = await findProductById(params.id)
        setSearchedItem(response)
    }

    const handleClick = (event) => {
        event.currentTarget.id === "back" && nav(-1);
        event.currentTarget.id === "buy" && handleCart();
        event.currentTarget.id === "checkout" && nav(Navigate("checkout"))
    }

    const handleChange = (event) =>{
        setCant(event.target.value)
    }

    const handleCart = () => {
        let cartArray = globalData.cartList;
        if(globalData.cartList.indexOf(searchedItem.data.id) === -1){
            cartArray.push({
                id:searchedItem.data.id,
                cant:cant,
                name:searchedItem.data.name,
                price:searchedItem.data.price,
            })
            update({...globalData,cartList:cartArray});
        }
        setBought(true)
    }


    if(!searchedItem){
		return (
            <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
			open={true}
          	>
            <CircularProgress color="inherit" />
          </Backdrop>			
		)
	} else if(searchedItem && searchedItem.status !== 200) {
        return(
        <div style={background1}>
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
            <Grid container mt={3} mb={3}>
                <Grid item container xs={12} mb={3} justifyContent="center">
                    <Typography fontSize={25} fontWeight="bold">Item Detail</Typography>
                </Grid>
                <Grid item container xs={12} justifyContent="center">
                    <Paper>
                        <Grid item container mt={2} xs={12}>
                            <DetailItem item={searchedItem.data} handleChange={handleChange} />
                        </Grid>
                        <Grid item container mt={2} mb={2} xs={12}>
                            <Grid item xs={4}/>
                            <Grid item container xs={2} justifyContent="center">
                                <Button
                                    id='buy'
                                    variant='db3d'
                                    onClick={handleClick}
                                    disabled={bought}
                                    >
                                    Comprar
                                </Button>
                            </Grid>
                            <Grid item xs/>
                            <Grid item container xs={2} justifyContent="center">
                                <Button
                                    id='back'
                                    variant='db3d'
                                    onClick={handleClick}
                                    >
                                    Volver
                                </Button>
                            </Grid>
                            <Grid item xs={4}/>
                        </Grid>
                        <Grid item container mb={4} xs={12} justifyContent="center">
                            {   bought &&
                                <Button
                                    id='checkout'
                                    variant='db3d'
                                    onClick={handleClick}
                                >
                                Ir al Checkout
                                </Button>
                            }
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        )
    }
}
