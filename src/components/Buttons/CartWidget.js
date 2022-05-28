import React, {useContext} from 'react'
import { Box, Button } from '@mui/material'
import ShoppingCartSharpIcon from '@mui/icons-material/ShoppingCartSharp';
import { Global } from '../../App';

export default function CartWidget(props) {
	const {globalData} = useContext(Global);

  	return (
		  <>
			<Button
				id='checkout'
				variant='db3d'
				onClick={props.handleClick}
				disabled={!globalData.totalItems}
				size={props.size}
				>
				<Box
					display="flex"
					flexDirection="row"
					alignItems="center"
					overflow="hidden"
				>
					<ShoppingCartSharpIcon fontSize={props.size} sx={{color:`${globalData.totalItems ? "black" : "gray"}`}}/>
					{globalData.totalItems ? "(" + globalData.totalItems + " items)" : "(vacío)" }
				</Box>
			</Button>
		  </>
  )
}
