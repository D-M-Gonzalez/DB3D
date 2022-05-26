import React from 'react'
import { IconButton, Drawer, MenuItem, Typography, Divider, Box } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';

export default function DrawerNavBar(props) {

    const handleClick = name => () => {
        props.handleDrawer({id:"menu",value:false})
        props.handleClickMenu(name)
    }

    return (
        <>
            <IconButton id="menu" onClick={() => props.handleDrawer({id:"menu",value:true})}>
                <MenuIcon sx={{fontSize:30,color:"black"}}/>
            </IconButton>
            <Drawer
                anchor='left'
                open={props.openDrawer.menu}
                onClose={() => props.handleDrawer({id:"menu",value:false})}
            >
            {Object.entries(props.menuItems).map((category)=>{
                return (
                    <Box>
                        <Typography fontSize={18} m={1}>{category[1].label}</Typography>
                        <Divider/>
                        {Array.from(category[1].subcategories).map((subcategory)=>{
                            return <MenuItem key={subcategory} onClick={handleClick(subcategory)} sx={{fontFamily:"Chakra Petch"}}>{subcategory}</MenuItem>
                        })}
                    </Box>
                )
            })}
            </Drawer>
        </>

    )
}
