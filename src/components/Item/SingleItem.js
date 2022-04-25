import { Grid, Typography } from '@mui/material'
import image1 from "../../img/TarjetaEjemplo.png"
import image2 from "../../img/Holder.png"
import React from 'react'

const background1 = {
	height: "350px",
    width: "200px",
	backgroundImage:`url(${image1})`,
    backgroundSize:"200px"
}
const background2 = {
	height: "350px",
    width: "200px",
	backgroundImage:`url(${image2})`,
    backgroundSize:"200px"
}

export default function SingleItem(props) {
  return (
    <Grid item container xs={12} mt={3} sx={{height:350,width:200}}>
        <div style={background2}>
            <div style={background1}>
                <Grid container>
                    <Grid item xs={12} sx={{height:280}}/>
                    <Grid item container xs={12} justifyContent="center">
                        <Typography fontSize={14} fontWeight="bold">{props.name}</Typography>
                    </Grid>
                    <Grid item container xs={12} justifyContent="center">
                        <Typography fontSize={14} fontWeight="bold">{props.price}</Typography>
                    </Grid>
                </Grid>
            </div>
        </div>
    </Grid>
  )
}
