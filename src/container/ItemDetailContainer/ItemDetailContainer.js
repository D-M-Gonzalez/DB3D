import { Button, Grid, Typography, Paper, Backdrop, CircularProgress } from '@mui/material';
import React, {useState, useEffect, useContext} from 'react'
import { useParams, useNavigate} from 'react-router-dom';
import DetailItem from '../../components/Item/DetailItem';
import { Global } from '../../App';
import Navigate from '../../modules/Navigator';

export default function ItemDetailContainer(props) {
    const globalData = useContext(Global);
    const [searchedItem, setSearchedItem] = useState();
    const [cant, setCant] = useState();
    const [bought, setBought] = useState(false);
    const params = useParams()
    const nav = useNavigate()

    useEffect(()=>{   
        if(globalData){
            try{
                setSearchedItem(globalData.products.find((el)=>{
                    return el.data.id === params.id;
                }))
                const found = globalData.cartList.find((item)=>{
                    return item.id === params.id
                })
                found && setBought(true)
            } catch (error){
                console.log(error)
            }
        }
    },[globalData])

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
            })
            globalData.update({...globalData,cartList:cartArray});
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
                                    <Typography fontSize={{lg:25,md:22,sm:16,xs:14}} fontWeight={700} color="black">Comprar</Typography>
                                </Button>
                            </Grid>
                            <Grid item xs/>
                            <Grid item container xs={2} justifyContent="center">
                                <Button
                                    id='back'
                                    variant='db3d'
                                    onClick={handleClick}
                                    >
                                    <Typography fontSize={{lg:25,md:22,sm:16,xs:14}} fontWeight={700} color="black">Volver</Typography>
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
                                    <Typography fontSize={{lg:25,md:22,sm:16,xs:14}} fontWeight={700}>Ir al Checkout</Typography>
                                </Button>
                            }
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        )
    }
}
