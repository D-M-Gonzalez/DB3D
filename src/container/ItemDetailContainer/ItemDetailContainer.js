import { Button, Grid, Typography, Paper } from '@mui/material';
import React, {useState, useEffect} from 'react'
import { useParams, useNavigate, useOutletContext} from 'react-router-dom';
import DetailItem from '../../components/Item/DetailItem';
import Navigate from '../../modules/Navigator';
import { findProductById } from '../../controllers/findProductById';

export default function ItemDetailContainer() {
    const {globalData,update} = useOutletContext();
    const [searchedItem, setSearchedItem] = useState();
    const [cant, setCant] = useState(1);
    const [bought, setBought] = useState(false);
    const params = useParams()
    const nav = useNavigate()

    useEffect(()=>{   
        const getProductById = async () => {
            const response = await findProductById(params.id)
            setSearchedItem(response)
        }
        getProductById()
        if(globalData.cartList.find((item)=>{
            return item.id === params.id
        })){
            setBought(true);
        }
    },[globalData.cartList,params.id])

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

        return (
            <Grid container mt={3} mb={3}>
                <Grid item container xs={12} mb={3} justifyContent="center">
                    <Typography fontSize={25} fontWeight="bold">Item Detail</Typography>
                </Grid>
                <Grid item container xs={12} justifyContent="center">
                    <Paper>
                        <Grid item container mt={2} xs={12}>
                            <DetailItem item={searchedItem} handleChange={handleChange} />
                        </Grid>
                        <Grid item container mt={2} mb={2} xs={12}>
                            <Grid item sm={4} xs/>
                            <Grid item container sm={2} xs={6} justifyContent="center">
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
                            <Grid item container sm={2} xs={6} justifyContent="center">
                                <Button
                                    id='back'
                                    variant='db3d'
                                    onClick={handleClick}
                                    >
                                    Volver
                                </Button>
                            </Grid>
                            <Grid item sm={4} xs/>
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

