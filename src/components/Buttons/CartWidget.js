import React, {useContext, useEffect} from 'react'
import { Box, Typography, Button } from '@mui/material'
import { Global } from '../../App';

export default function CartWidget(props) {
	const globalData = useContext(Global);

	const handleClick = () => {
		props.handleClick("checkout")
	}

  	return (
		  <>
			<Button
				id='cart'
				variant='db3d'
				onClick={handleClick}
				disabled={!globalData.totalItems}
				>
				<Box
					display="flex"
					flexDirection="row"
					alignItems="center"
				>
					<Box component="img" src="/assets/CartSharp.png" sx={{height:"4vw",width:"auto",maxHeight:34}}/>
					<Typography ml={1} fontSize={{lg:12,md:11,xs:10}} fontWeight={700} color="black">{globalData.totalItems ? "(" + globalData.totalItems + " items)" : "(empty)" }</Typography>
				</Box>
			</Button>
		  </>
  )
}
