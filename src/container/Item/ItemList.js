import React from 'react'
import { Grid } from '@mui/material'
import SingleItem from '../../components/Item/SingleItem'


export default function ItemList(props) {
        const handleClick = id => () => {
            props.detail(id)
        }

        return (
          <Grid container>
              {Array.from(props.items).map((el)=>{
                  return (
                      <Grid item container key={el.data.id} xs={3} m={2} onClick={handleClick(el.data.id)}>
                          <SingleItem key={el.data.id} name={el.data.name} price={el.data.price} image={el.data.image_url}/>
                      </Grid>
                  )
              })}
          </Grid>
        )
    }
