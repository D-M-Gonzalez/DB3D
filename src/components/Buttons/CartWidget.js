import React from 'react'
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import IconButton from '@mui/material/IconButton';

export default function CartWidget() {
  return (
    <IconButton
      size="large"
      edge="start"
      color="inherit"
      aria-label="open drawer"
      sx={{ mr: 2 }}
      >
      <ShoppingCartCheckoutIcon sx={{fontSize:40}}/>
    </IconButton>
  )
}
