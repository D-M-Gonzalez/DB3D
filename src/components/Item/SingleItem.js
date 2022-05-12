import { Grid, Typography, Box} from '@mui/material'
import { useOutletContext } from 'react-router-dom';
import React, { useEffect, useState } from 'react'
import { styled } from '@mui/material/styles';

const HoverPaper = styled(Box)(({theme})=>({
    backgroundColor:"white",
    boxShadow:"1px 1px 2px #888888",
    transition: "transform 0.35s ease-in-out , background-color 0.35s ease-in-out",
    "&:hover": {
        backgroundColor: "#ffe6e9",
        transform: "scale(1.1,1.1)"
    }
  }));


export default function SingleItem(props) {
    const {imageSizeMultiplier} = useOutletContext();

  return (
        <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
        >
            <HoverPaper>
                <Grid item container xs={12} sx={{width:`${250*imageSizeMultiplier}px`}}>
                    <Grid item container xs={12} justifyContent="center">
                        <Box component="img" src={props.image} sx={{width:`${250*imageSizeMultiplier}px`, height:`${200*imageSizeMultiplier}px`, borderRadius:0}}></Box>
                    </Grid>
                    <Grid container>
                        <Grid item xs={12}/>
                        <Grid item container xs={12} justifyContent="center">
                            <Typography mt={1} fontSize={16} >{props.name}</Typography>
                        </Grid>
                        <Grid item container xs={12} justifyContent="center">
                            <Typography mb={1} fontSize={14} fontWeight="bold">${props.price}</Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </HoverPaper>
        </Box>
  )
}
