import React, {useState} from 'react';
import { useSearchParams } from 'react-router-dom';
import {Button,Menu,MenuItem,Typography} from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export default function FilterMenu(props) {
	const [searchParams,setSearchParams] = useSearchParams()
  	const [anchorEl, setAnchorEl] = useState(null);
  	const [arrowAngle, setArrowAngle] = useState(0);
  	const open = Boolean(anchorEl);

  	const handleClick = (event) => {
    	setAnchorEl(event.currentTarget);
    	setArrowAngle(180)
  	};
  	const handleClose = (event) => {
		const name = event.currentTarget.id.replace("+",".")
    	setAnchorEl(null);
    	setArrowAngle(0);
		setSearchParams({...Object.fromEntries([...searchParams]),sort:name})
  	};

  	return (
        <>
            <Button
                variant="filter"
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                sx={{minHeight:40}}
                >
                <Typography color="black" fontSize={{sm:14,xs:10}}>{props.text}</Typography>
                <KeyboardArrowDownIcon sx={{color:"black", transform:`rotate(${arrowAngle}deg)`}}/>
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
                >
                <MenuItem onClick={handleClose} id={`${props.id}+asc`}><Typography color="black" sx={{width:"200px"}}>Ascendente</Typography></MenuItem>
                <MenuItem onClick={handleClose} id={`${props.id}+desc`}><Typography color="black" sx={{width:"200px"}}>Descendente</Typography></MenuItem>
            </Menu>
        </>
  );
}