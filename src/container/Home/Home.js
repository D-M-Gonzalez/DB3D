import React, {useEffect, useRef, useMemo} from 'react';
import { useSearchParams, useOutletContext} from 'react-router-dom';
import { Box } from '@mui/material';
import HomeUs from './Sub/HomeUs';
import HomeGear from './Sub/HomeGear';
import HomeProducts from './Sub/HomeProducts';

export default function Home() {
	const {ref} = useOutletContext();
    const [searchParams] = useSearchParams();
	const homeRef = useMemo(()=>{
		const ref = []
		return ref
	},[])
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
		const scrollToRef = () => {
			homeRef.forEach((el)=>{
				if ({...Object.fromEntries([...searchParams])}.section === el.name){
					el.id.current.scrollIntoView({block:'start', behavior: 'smooth'})
				}                
			}); 		
		}

        scrollToRef();
    },[searchParams,homeRef])

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
