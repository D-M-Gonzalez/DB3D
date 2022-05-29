import React from 'react'
import { Button, Drawer, MenuItem, Typography, Divider, Box } from '@mui/material'
import PersonIcon from '@mui/icons-material/Person';

export default function DrawerUser(props) {

    const handleClick = name => () => {
        props.handleDrawer({id:"user",value:false})
        props.handleClickMenu(name)
    }

    return (
        <>
            <Button 
                variant='db3d'
                id="user"
                size={props.size}
                onClick={() => props.handleDrawer({id:"user",value:true})}
                >
                <PersonIcon fontSize={props.size} sx={{color:"black"}}/>
                {props.name ? props.name.name : "Invitado"}
            </Button>
            <Drawer
                anchor='right'
                open={props.openDrawer.user}
                onClose={() => props.handleDrawer({id:"user",value:false})}
            >
                <Box>
                    <Typography fontSize={18} m={1}>{props.name ? props.name.name : "Invitado"}</Typography>
                    <Divider/>
                    { props.name ? 
                        <>
                            <MenuItem onClick={handleClick("modifyuser")} sx={{fontFamily:"Chakra Petch"}}>Modificar mis Datos</MenuItem>
                            <MenuItem onClick={handleClick("userorders")} sx={{fontFamily:"Chakra Petch"}}>Mis ordenes</MenuItem>
                            <MenuItem onClick={handleClick("logout")} sx={{fontFamily:"Chakra Petch"}}>Salir</MenuItem>
                        </>
                        :
                        <>
                            <MenuItem onClick={handleClick("login")} sx={{fontFamily:"Chakra Petch"}}>Entrar</MenuItem>
                            <MenuItem onClick={handleClick("signup")} sx={{fontFamily:"Chakra Petch"}}>Registrarme</MenuItem>
                        </>
                    }
                    <Divider/>
                </Box>
            </Drawer>
        </>

    )
}