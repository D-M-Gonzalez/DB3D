import React, {useState, useEffect} from 'react'
import { Outlet, useSearchParams, useLocation, useNavigate } from 'react-router-dom';
import {useMediaQuery, useTheme} from '@mui/material/';
import { customTheme } from '../MuiTheme';
import { findProducts } from '../controllers/findProducts';
import validateURL from '../modules/ValidateURL';
import Navigate from '../modules/Navigator';

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
    const [searchParams, setSearchParams] = useSearchParams()
    const [globalData, setGlobalData] = useState({
		cartList:[],
		totalItems: 0,
        totalPrice: 0,
		update: (data) => updateGlobal(data),
	})
    const URL = useLocation();
    const nav = useNavigate();

    useEffect(()=>{
		const found = imageSize.find((el)=>{
			return el.value === true;
		}).multiplier
		setSize(found)
	},[JSON.stringify(imageSize)])

    useEffect(()=>{
        setStore(null)
        if ( URL.pathname === '/items' ){
            filterItems()
        }
    },[searchParams])

    useEffect(()=>{
		localStorage.getItem("items") && startGlobalData();
	},[])

	useEffect(()=>{
		globalData.cartList.length > 0 && updateLocalStorage(globalData)
	},[globalData])

    const updateGlobal = (data) => {
		let cant = 0;
        let price = 0;
		data.cartList.forEach((item)=>{
			cant = cant + Number(item.cant)
            price = price + Number(item.price) * item.cant
		})
		setGlobalData({...data,totalItems:cant,totalPrice:price})
        props.totalItems(cant)
	}

	const updateLocalStorage = (data) => {
		localStorage.removeItem("items")
		localStorage.setItem("items",JSON.stringify(data))
	}

	const startGlobalData = () => {
		updateGlobal(JSON.parse(localStorage.getItem("items")))
	}

    const filterItems = async () => {
        const page = searchParams.get("page")
        const size = searchParams.get("size")
        const category = searchParams.get("category")
        const subcategory = searchParams.get("subcategory")
        const search = searchParams.get("search")
        const sort = searchParams.get("sort")
        const validURL = validateURL([page,size,category,subcategory])

        if (!validURL){
            const response = await findProducts(page,size,category,subcategory,search,sort)
    
            setPagination({
                page:page,
                size:size,
                total:response.total
            })
    
            setStore(response)
        } else {
            nav(Navigate("ALL"))
        }
    }

    return (
        <Outlet context={{
            loadStore: store,
            page: pagination.page,
            total: pagination.total,
            size: pagination.size,
            ref: props.layoutRef,
            imageSizeMultiplier: size,
            globalData: globalData,
            update: updateGlobal,
        }}/>
    )
}
