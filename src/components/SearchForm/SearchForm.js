import React, {useState,useEffect} from 'react';
import {Box,TextField} from '@mui/material';
import { useSearchParams } from 'react-router-dom';

export default function SearchForm() {
	const [wait, setWait] = useState(true)
	const [search, setSearch] = useState()
	const [searchParams,setSearchParams] = useSearchParams()

	useEffect(()=>{
		wait && handleUrl();
	},[search])

	useEffect(()=>{
		wait && setSearchParams({...Object.fromEntries([...searchParams]),search:search});
	},[wait])

	const handleUrl = async () => {
		setWait(false)
		const delay = new Promise ((resolve,reject)=>{    
			setTimeout(()=>{          
				setWait(true);
				resolve(true)
			},1000)
		})
	}
	const handleChange = (event) => {
		setSearch(event.target.value)
	}

  return (
    <Box
        component="form"
        sx={{
            '& > :not(style)': { m: 2, width: '80%' },
        }}
        noValidate
        autoComplete="off"
		onChange={handleChange}
        >
        <TextField id="buscar" label="Buscar items" variant="outlined" />
    </Box>
  );
}