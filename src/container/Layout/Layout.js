import React, {useState, useEffect} from 'react'
import {Grid, Typography} from '@mui/material/';
import NavBar from '../../components/NavBar/NavBar';
import { useNavigate, Outlet, useSearchParams, useLocation } from 'react-router-dom';

export default function Layout() {
    const [store, setStore] = useState([])
    const [filteredStore, setFilteredStore] = useState([])
    const [searchParams, setSearchParams] = useSearchParams();
    const location = useLocation()
    const nav = useNavigate()

    useEffect(()=>{
        location.pathname === "/" && nav("/items/list?page=1&size=10&category=ALL&search=")
        location.pathname === "/items/list" && setFilters();
    },[store,searchParams])
    
    const setFilters = () => {
        let search = {}
        !searchParams.get("page") ? (search = ({...search,page:1})) : (search = ({...search,page:searchParams.get("page")}))
        !searchParams.get("size") ? (search = ({...search,size:10})) : (search = ({...search,size:searchParams.get("size")}))
        !searchParams.get("category") ? (search = ({...search,category:"ALL"})) : (search = ({...search,category:searchParams.get("category")}))
        !searchParams.get("search") ? (search = ({...search,search:""})) : (search = ({...search,search:searchParams.get("search")}))
        setSearchParams(search)
        filterItems(); 
    }

    const filterItems = () => {
        let filter = [];
        if (searchParams.get("category") !== "ALL"){
            filter = store.filter((el)=>{
                return el.data.brand.brand_name.toUpperCase().includes(searchParams.get("category"))
            })
        } else {
            filter = store
        }
        if (searchParams.get("search") !== ""){
            filter = filter.filter((el)=>{
                return el.data.name.includes(searchParams.get("search"))
            })
        }
        setFilteredStore(filter)

	}
    
    const category = (input) => {
        setSearchParams({...Object.fromEntries([...searchParams]),category:input.toUpperCase()})    
    }

    const searchName = (input) => {
        setSearchParams({...Object.fromEntries([...searchParams]),search:input})
    }

    const createStore = (items) => {
        setStore(items);
    }

    return (
        <Grid container>
            <Grid item container xs={12} justifyContent="center">
                <Typography m={4} fontSize={50} fontWeight="bolder">THE BEST CAR SHOP!</Typography>
            </Grid>
            <Grid item container xs={12}>
                <NavBar search={searchName}/>
            </Grid>
            <Grid item container xs={12}>
                <Outlet context={{createStore:[createStore],loadStore:[filteredStore],categoryChange:[category]}}/>
            </Grid>
        </Grid>
    )
}
