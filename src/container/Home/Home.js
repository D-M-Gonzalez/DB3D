import React, {useEffect, useRef} from 'react';
import { useSearchParams, useOutletContext} from 'react-router-dom';
import { Box, Typography, useMediaQuery, useTheme, Paper } from '@mui/material';
import Reveal from 'react-awesome-reveal'
import { keyframes } from "@emotion/react";
import HomeUs from './Sub/HomeUs';
import HomeGear from './Sub/HomeGear';
import HomeProducts from './Sub/HomeProducts';

export default function Home() {
	const {ref} = useOutletContext();
    const [searchParams, setSearchParams] = useSearchParams();
	const homeRef = [];
	homeRef.push(
		{
			id:ref,
			name:"us"
		},
		{
			id:useRef(),
			name:"gear"
		},
		{
			id:useRef(),
			name:"products"
		},
	)

    useEffect(()=>{
        scrollToRef();
    },[searchParams])

	const scrollToRef = () => {
		homeRef.forEach((el)=>{
            if ({...Object.fromEntries([...searchParams])}.section === el.name){
                el.id.current.scrollIntoView({block:'start', behavior: 'smooth'})
            }                
        }); 		
	}

  return (
		<Box>
			<Box>
				<HomeUs/>
			</Box>
			<Box ref={homeRef[1].id}>
				<HomeGear/>
			</Box>
			<Box ref={homeRef[2].id}>
				<HomeProducts/>
			</Box>
		</Box>
  	)
}
