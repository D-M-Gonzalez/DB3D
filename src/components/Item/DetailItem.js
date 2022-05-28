import { Grid, Typography, Container, TextField } from '@mui/material';
import { useOutletContext } from 'react-router-dom';
import { Box } from '@mui/system';
import React from 'react'

export default function DetailItem(props) {
	const {imageSizeMultiplier} = useOutletContext();

        return (
			<Container>
				<Grid container justifyContent="center">
					<Grid container item md={6} xs={12} justifyContent="center">
						<Box 
							component="img" 
							sx={{width:`${400*(Math.pow(imageSizeMultiplier,2))}px`,height:`${500*(Math.pow(imageSizeMultiplier,2))}px`}} 
							src={props.item.images[0]} 
							/>
					</Grid>
					<Grid container item md={6} xs={12} justifyContent="center">
						<Grid container item xs={12} justifyContent="center">
							<Typography fontSize={20} fontWeight={600} ml={2} mr={2} mt={1}>{props.item.name}</Typography>
						</Grid>
						<Grid container item xs={12} justifyContent="center">
							<Typography fontSize={16} ml={2} mr={2} mt={1}>{props.item.description}</Typography>
						</Grid>
						<Grid container item xs={12} justifyContent="center">
							<Typography fontSize={18} ml={2} mr={2} mt={1}>{props.item.price}$</Typography>
						</Grid>
						<Grid item xs={4}/>
						<Grid container item mt={4} xs={4} justifyContent="center">
							<Box
								display="flex"
								flexDirection="row"
								alignItems="center"
								>
									<Typography ml={1} mr={1} fontSize={{lg:18,md:16,sm:14}}>Cantidad:</Typography>
									<TextField
									type="number"
									onChange={props.handleChange}
									size="small"
									defaultValue={1}
								/>
							</Box>
						</Grid>
						<Grid item xs={4}/>
					</Grid>
				</Grid>
			</Container>
        )
    }