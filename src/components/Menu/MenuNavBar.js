import React from 'react'
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';


export default function MenuNavBar(props) {

    const handleClick = name => (event) => {
        props.handleClickMenu(name)
        props.handleClose(event)
    }

  return (
    <>
        <Button
            id={props.name}
            variant='db3d'
            aria-controls={props.open === props.name ? props.name : undefined}
            aria-haspopup="true"
            aria-expanded={props.open === props.name ? 'true' : undefined}
            onClick={props.handleClick}
            >
            <Typography fontSize={{lg:25,md:22,sm:16,xs:14}} fontWeight={700} color="black">{props.name}</Typography>
        </Button>
        <Menu
            id={props.name}
            anchorEl={props.anchor}
            open={props.open === props.name ? true : false}
            onClose={props.handleClose}
            MenuListProps={{
                'aria-labelledby': 'intro-button',
            }}
            >
            {Array.from(props.categories).map((category)=>{
                return <MenuItem key={category} onClick={handleClick(category)} sx={{fontFamily:"Chakra Petch"}}>{category}</MenuItem>
            })}
        </Menu>
    </>
  )
}
