import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

export default function ItemListContainer(props) {

  return (
    <Grid container>
        <Grid item xs={12}>
            <Typography fontWeight="bold" color="red" fontSize={30}>{props.text}</Typography>
        </Grid>
    </Grid>
  )
}