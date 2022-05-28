import React from 'react'
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Typography } from '@mui/material';

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
            size={props.size}
            onClick={props.handleClick}
            >
            {props.name}
        </Button>
        <Menu
            id={props.name}
            anchorEl={props.anchor}
            open={props.open === props.name ? true : false}
            onClose={props.handleClose}
            elevation={0}
            MenuListProps={{
                'aria-labelledby': 'intro-button',
            }}
            PaperProps={{
                style:{
                    borderRadius:0,
                    borderLeft:"1px solid lightgray",
                    borderRight:"1px solid lightgray",
                }
            }}
            >
            {Array.from(props.categories).map((category)=>{
                return (
                    <MenuItem
                        key={category} 
                        onClick={handleClick(category)} 
                        >
                        <Typography fontSize={{lg:20,md:18,sm:16}} ml={{lg:2,md:1.5,sm:1}} mr={{lg:2,md:1.5,sm:1}}>{category}</Typography>
                    </MenuItem>
                )
            })}
        </Menu>
    </>
  )
}
