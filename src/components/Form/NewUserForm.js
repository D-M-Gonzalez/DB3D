import React from 'react'
import { useOutletContext } from 'react-router-dom';
import { Box, TextField } from '@mui/material';

export default function NewUserForm(props) {
    const {imageSizeMultiplier} = useOutletContext();

    return (
        <Box
            display="flex"
            flexDirection="column"
            m={{md:3,xs:1}}
            >
            {props.fields.map((field,index)=>{
                return 	(
                    <TextField
                        key={field[0]}
                        id={field[0]}
                        type={field[1].type === "password" ? 'password' : 'text'}
                        multiline={field[1].type === "multiline" ? true : false}
                        rows={field[1].type === "multiline" ? 4 : 1}
                        variant='outlined'
                        label={field[1].label}
                        error={props.userData[field[0]].error}
                        helperText={props.userData[field[0]].errorText}
                        size='small'
                        value={props.userData[field[0]].data}
                        disabled={props.disabled}
                        onBlur={props.handleBlur}
                        onChange={props.handleChange}
                        sx={{mt:2,width:`${field[1].width*(Math.pow(imageSizeMultiplier,3)+0.3)}px`}}
                    />
                )
            })}
        </Box>
    )
}
