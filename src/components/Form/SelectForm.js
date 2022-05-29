import React from 'react';
import {Box, Select, MenuItem} from '@mui/material';

export default function SelectForm(props) {

  return (
    <Box
        component="form"
        sx={{
            '& > :not(style)': { m: 2, width: '80%' },
        }}
        noValidate
        autoComplete="off"
        >
        <Select
			id="sizeSelect"
			value={props.value}
            size='small'
			onChange={props.handleChange}
            margin="dense"
			>
			<MenuItem value={5}>5 items</MenuItem>
			<MenuItem value={10}>10 items</MenuItem>
			<MenuItem value={20}>20 items</MenuItem>
            <MenuItem value={30}>30 items</MenuItem>
		</Select>
    </Box>
  );
}