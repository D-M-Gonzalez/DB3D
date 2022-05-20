import React, {useState, useEffect} from 'react';
import {Grid,Backdrop, CircularProgress,Box, Divider, Pagination} from '@mui/material/';
import ItemList from '../Item/ItemList';
import { useOutletContext, useNavigate, useSearchParams, useLocation } from 'react-router-dom';
import FilterMenu from '../../components/Menu/FilterMenu';
import FilterAccordion from '../../components/Accordions/FilterAccordion';
import { itemCategories } from '../../data/itemCategories';
import SearchForm from '../../components/SearchForm/SearchForm';

export default function ItemListContainer() {
  	const {loadStore,page,total,size} = useOutletContext();
	const [filteredItems, setFilteredItems] = useState();
	const [expanded, setExpanded] = useState();
	const [searchParams, setSearchParams] = useSearchParams({
		page: 1,
		size: 10
	})
	const nav = useNavigate();
	const URL = useLocation()

	useEffect(()=>{
		if(loadStore){
			try{
				setFilteredItems(loadStore)
			} catch(error){
				console.log(error)
			}
		}
	},[loadStore])

	const showDetail = (id) => {
		nav(`/detail/${id}`)
	}

	const handleChange = (event, value) => {
		setSearchParams({...Object.fromEntries([...searchParams]),page:value,size:10})
	};

	const handleExpanded = (label) => {
		setExpanded(label)
	}

	if(!filteredItems){
		return (
            <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
			open={true}
          	>
            <CircularProgress color="inherit" />
          </Backdrop>			
		)
	} else {
		return (
		  	<Grid container sx={{backgroundColor:"white"}}>
			  	<Grid item container mt={1} mb={1} xs={12} sx={{height:40}} alignItems="center">
					<Box
						display="flex"
						flexDirection="row"
						justifyContent="space-evenly"
						sx={{width:"100%"}}
					>
						<FilterMenu text="Ordenar por Fecha" id="sortbydate"/>
						<FilterMenu text="Ordenar por Precio" id="sortbyprice"/>
						<FilterMenu text="Ordenar por Nombre" id="sortbyname"/>
					</Box>
				</Grid>
				<Divider style={{width:'100%'}} />
				<Grid item sm={3} xs={12}>
					<Box
						display="flex"
						flexDirection="column"
						>
						<SearchForm/>
						{Object.entries(itemCategories).map((category)=>{
							return (
								<FilterAccordion key={category[1].id} id={category[1].id} label={category[1].label} subcategories={category[1].subcategories} expanded={expanded} checkExpanded={handleExpanded}/>
							)
						})}
						<Divider style={{width:'100%'}} />
					</Box>
				</Grid>
				<Divider orientation="vertical" flexItem />
				<Grid item container pt={2} pb={2} sm={8.95} xs={11.95} justifyContent="center" sx={{backgroundColor:"rgb(240, 240, 240)"}}>
					<ItemList items={filteredItems.items} detail={showDetail}/>
					<Pagination count={Math.trunc(total/size)+1} page={Number(page)} onChange={handleChange} siblingCount={1} boundaryCount={1}/>
				</Grid>
			</Grid>
		)
	}
}