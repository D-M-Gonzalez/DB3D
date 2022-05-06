import { Grid, Typography, Box } from '@mui/material'
import React from 'react'


export default function SingleItem(props) {

  return (
    <Grid item container xs={12} mt={3} sx={{width:200}}>
        <Grid item container xs={12} justifyContent="center">
            <Box component="img" src={props.image} sx={{width:200, height:150}}></Box>
        </Grid>
        <Grid container>
            <Grid item xs={12}/>
            <Grid item container xs={12} justifyContent="center">
                <Typography fontSize={14} fontWeight="bold">{props.name}</Typography>
            </Grid>
            <Grid item container xs={12} justifyContent="center">
                <Typography fontSize={14} fontWeight="bold">{props.price}</Typography>
            </Grid>
        </Grid>
    </Grid>
  )
}
