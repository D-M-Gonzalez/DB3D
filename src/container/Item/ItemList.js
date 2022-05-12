import React from 'react'
import { Grid } from '@mui/material'
import SingleItem from '../../components/Item/SingleItem'


export default function ItemList(props) {
        const handleClick = id => () => {
            props.detail(id)
        }
        return (
          <Grid container justifyContent="center">
              {Array.from(props.items).map((el)=>{
                  return (
                      <Grid item container key={el.data.id} lg={3} md={4} sm={5} xs={12} m={2} onClick={handleClick(el.data.id)} justifyContent="center">
                          <SingleItem key={el.data.id} name={el.data.name} price={el.data.price} image={el.data.image_url}/>
                      </Grid>
                  )
              })}
          </Grid>
        )
    }
