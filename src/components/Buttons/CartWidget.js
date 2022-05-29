import React from 'react'
import { Box, Button } from '@mui/material'
import ShoppingCartSharpIcon from '@mui/icons-material/ShoppingCartSharp';

export default function CartWidget(props) {

  	return (
		  <>
			<Button
				id='checkout'
				variant='db3d'
				onClick={props.handleClick}
				disabled={!props.totalItems}
				size={props.size}
				>
				<Box
					display="flex"
					flexDirection="row"
					alignItems="center"
					overflow="hidden"
				>
					<ShoppingCartSharpIcon fontSize={props.size} sx={{color:`${props.totalItems ? "black" : "gray"}`}}/>
					{props.totalItems ? "(" + props.totalItems + " items)" : "(vacío)" }
				</Box>
			</Button>
		  </>
  )
}
