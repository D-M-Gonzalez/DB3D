import { Grid, Typography, Container } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react'

export default function DetailItem(props) {
        return (
			<Container>
				<Grid container justifyContent="center">
					<Grid container item xs={6}>
						<Box component="img" sx={{width:500,height:"auto"}} src={props.item.image_url} />
					</Grid>
					<Grid container item xs={6}>
						<Typography fontSize={20}>{props.item.name}</Typography>
						<Typography fontSize={16}>{props.item.description}</Typography>
						<Typography fontSize={18}>{props.item.price}$</Typography>
					</Grid>
				</Grid>
			</Container>
        )
    }