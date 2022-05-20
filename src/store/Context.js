import React, {useState, useEffect, useContext} from 'react'
import { Outlet, useSearchParams, useLocation } from 'react-router-dom';
import {useMediaQuery, useTheme} from '@mui/material/';
import { Global } from '../App';
import { customTheme } from '../MuiTheme';
import { findProducts } from '../controllers/findProducts';

export default function Context(props) {
    
    const theme = useTheme(customTheme)
	const imageSize = [
		{
			multiplier: 0.7,
			value: useMediaQuery(theme.breakpoints.only('xs')),
		},
		{
			multiplier: 0.7,
			value: useMediaQuery(theme.breakpoints.only('sm')),
		},
		{
			multiplier: 0.8,
			value: useMediaQuery(theme.breakpoints.only('md')),
		},
		{
			multiplier: 0.9,
			value: useMediaQuery(theme.breakpoints.only('lg')),
		},
		{
			multiplier: 1.2,
			value: useMediaQuery(theme.breakpoints.only('xl')),
		},
		]
    const [size, setSize] = useState(1)
    const [store, setStore] = useState();
    const [pagination, setPagination] = useState({
        page:1,
        size:10,
    })
    const globalData = useContext(Global);
    const [searchParams, setSearchParams] = useSearchParams()
    const URL = useLocation();

    useEffect(()=>{
		const found = imageSize.find((el)=>{
			return el.value === true;
		}).multiplier
		setSize(found)
	},[JSON.stringify(imageSize)])

    useEffect(()=>{
        if ( URL.pathname === '/items/list' ){
            filterItems()
        }
    },[searchParams])

    const filterItems = async () => {
        const page = searchParams.get("page")
        const size = searchParams.get("size")
        const category = searchParams.get("category")
        const subcategory = searchParams.get("subcategory")
        const search = searchParams.get("search")
        const response = await findProducts(page,size,category,subcategory,search)

        setPagination({
            page:page,
            size:size,
            total:response.total
        })

        setStore(response)
    }

    return (
        <Outlet context={{
            loadStore:store,
            page:pagination.page,
            total:pagination.total,
            size:pagination.size,
            ref:props.layoutRef,
            imageSizeMultiplier:size,
        }}/>
    )
}
