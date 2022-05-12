import React, {useState, useEffect, useContext} from 'react'
import { Outlet, useSearchParams, useLocation } from 'react-router-dom';
import {useMediaQuery, useTheme} from '@mui/material/';
import { Global } from '../App';
import { customTheme } from '../MuiTheme';

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
        initialSetup();
    },[globalData])

    useEffect(()=>{
        if ( globalData && URL.pathname === '/items/list' ){
            filterItems()
        }
    },[searchParams])

    const initialSetup = async () => {
        try {
            filterItems()
        } catch(error) {
            console.log(error)
        }
    }

    const filterItems = () => {
        let filteredItems = globalData.products;
        if(searchParams.get("search") !== "undefined") {filteredItems = filteredItems.filter((el)=>{
            let product = el.data.name.toUpperCase()
            let param = searchParams.get("search")
            param = param.replace("+"," ")
            param = param.toUpperCase()
            return product.includes(param)
        })} else {
            setSearchParams({...Object.fromEntries([...searchParams]),search:""});
        }

        if(searchParams.get("sort")){
            let sort = searchParams.get("sort")
            sort = sort.split(".")
            if(sort[0] === "sortbyname"){
                filteredItems.sort(function(a,b){
                    let itemA = a.data.name;
                    let itemB = b.data.name;

                    if(itemA < itemB){ return -1}
                    if(itemA > itemB){ return 1}

                    return 0})
            }
            if(sort[0] === "sortbydate"){
                filteredItems.sort(function(a,b){
                    let itemA = a.data.date;
                    let itemB = b.data.date;

                    if(itemA < itemB){ return -1}
                    if(itemA > itemB){ return 1}

                    return 0})
            }
            if(sort[0] === "sortbyprice"){
                filteredItems.sort(function(a,b){
                    let itemA = a.data.price;
                    let itemB = b.data.price;

                    if((itemA - itemB) < 0){ return -1}
                    if((itemA - itemB) > 0){ return 1}

                    return 0})
            }
            sort[1] === "desc" && filteredItems.reverse();
        } else {
            setSearchParams({...Object.fromEntries([...searchParams]),sort:"sortbyname.asc"});
        }

        setPagination({...pagination,
            page:searchParams.get("page"),
            size:searchParams.get("size"),
            total:filteredItems.length,
        })
        
        filteredItems = filteredItems.slice((searchParams.get("size")*(searchParams.get("page")-1)),(searchParams.get("size")*(searchParams.get("page"))))

        setStore(filteredItems)
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
