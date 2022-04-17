import React, {useState} from 'react'
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';


export default function MenuNavBar(props) {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
      };
    const handleClose = () => {
        setAnchorEl(null);
    };

  return (
    <>
        <Button
            id="intro-button"
            aria-controls={open ? 'intro' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
            >
            <Typography fontWeight="bold" fontSize={20} color="white" >{props.name}</Typography>
        </Button>
        <Menu
            id="intro"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
                'aria-labelledby': 'intro-button',
            }}
            >
            {Array.from(props.categories).map((el)=>{
                return <MenuItem onClick={handleClose}>{el}</MenuItem>
            })}
        </Menu>
    </>
  )
}
