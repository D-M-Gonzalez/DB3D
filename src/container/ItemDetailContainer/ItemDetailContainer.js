import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, {useState, useEffect} from 'react'
import { useOutletContext, useNavigate, useParams } from 'react-router-dom';
import DetailItem from '../../components/Item/DetailItem';

export default function ItemDetailContainer(props) {
    const {loadStore} = useOutletContext();
	const [items, setItems] = loadStore;
    const [searchedItem, setSearchedItem] = useState();
    const params = useParams()

    useEffect(()=>{
        setSearchedItem(items.find((el)=>{
            return el.data.id === params.id;
        }))
    },[])
    if(!searchedItem){
        return(
            <div>loading...</div>
        )
    } else {
        return (
            <Grid container mt={3}>
                <Grid item container xs={12} justifyContent="center">
                    <Typography fontSize={25} fontWeight="bold">Item Detail</Typography>
                </Grid>
                <Grid item container mt={2} xs={12}>
                    <DetailItem item={searchedItem.data} />
                </Grid>
            </Grid>
        )
    }
}
