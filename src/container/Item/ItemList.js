import React from 'react'
import { useOutletContext } from 'react-router-dom';
import { Grid, Skeleton } from '@mui/material'
import SingleItem from '../../components/Item/SingleItem'


export default function ItemList(props) {
        const {loadStore} = useOutletContext();
        const handleClick = id => () => {
            props.detail(id)
        }
        const skeleton = [1,2,3,4,5,6]

        if(!loadStore){
            return (
                <Grid container justifyContent="center">
                    {skeleton.map((el)=>{
                        return (
                            <Grid item container key={el} lg={3} md={4} sm={5} xs={12} m={2} justifyContent="center">
                                <Skeleton 
                                    variant="rectangular" 
                                    animation='pulse' 
                                    width={150} 
                                    height={250}
                                    sx={{borderRadius:1}}
                                    />
                            </Grid>
                        )
                    })}
                </Grid>
            )
        } else {
        return (
          <Grid container justifyContent="center">
              {Array.from(loadStore.items).map((el)=>{
                  return (
                      <Grid item container key={el.data.id} lg={3} md={4} sm={5} xs={12} m={2} onClick={handleClick(el.data.id)} justifyContent="center">
                          <SingleItem key={el.data.id} name={el.data.name} price={el.data.price} image={el.data.images[0]}/>
                      </Grid>
                  )
              })}
          </Grid>
        )
    }
}
