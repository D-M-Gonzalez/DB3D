import React, {useState, useEffect} from 'react'
import { Grid, Backdrop, CircularProgress } from '@mui/material'
import itemExample from '../../data/itemExample'
import SingleItem from '../../components/Item/SingleItem'


export default function ItemList() {
    const [loaded, setLoaded] = useState(false);
    const [open, setOpen] = useState(true);

    useEffect(()=>{
        time();
    },[])

    const time = async () => {
		const response = await new Promise(function(resolve,reject){
			setTimeout(function(){resolve("okay")},2000)
		});
		response && setLoaded(true)
    }

    if(!loaded){
        return (
            <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={open}
          >
            <CircularProgress color="inherit" />
          </Backdrop>
        )
    } else {
        return (
          <Grid container>
              {Array.from(itemExample).map((el)=>{
                  return (
                      <Grid item xs={3} spacing={1}>
                          <SingleItem name={el.name} price={el.price} />
                      </Grid>
                  )
              })}
          </Grid>
        )
    }
}
