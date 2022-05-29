import React, {useState, useEffect} from 'react';
import {Grid, Box, Divider, Pagination} from '@mui/material/';
import ItemList from '../Item/ItemList';
import { useOutletContext, useNavigate, useSearchParams} from 'react-router-dom';
import FilterMenu from '../../components/Menu/FilterMenu';
import FilterAccordion from '../../components/Accordions/FilterAccordion';
import { itemCategories } from '../../data/itemCategories';
import SearchForm from '../../components/Form/SearchForm';
import SelectForm from '../../components/Form/SelectForm';
import Error404 from '../../components/Error404/Error404';

export default function ItemListContainer() {
  	const {loadStore,page,total,size} = useOutletContext();
	const [expanded, setExpanded] = useState();
	const [searchParams, setSearchParams] = useSearchParams({
		page: 1,
		size: 10
	})
	const nav = useNavigate();

	useEffect(()=>{
		if(searchParams.get("category")){
			setExpanded(searchParams.get("category").toLowerCase())
		}
	},[loadStore,searchParams])

	const showDetail = (id) => {
		nav(`/detail/${id}`)
	}

	const handleChange = (event, value) => {
		setSearchParams({...Object.fromEntries([...searchParams]),page:value,size:size})
	};

	const handleSelect = (event) => {
		setSearchParams({...Object.fromEntries([...searchParams]),page:page,size:event.target.value})
	}

	const handleExpanded = (label) => {
		setExpanded(label)
	}

	const handleClick = (expanded,id) => (event) => {
        const name = event.currentTarget.id.split("+")
        if(name[0] === "category"){
            if(expanded === id){
                setSearchParams({...Object.fromEntries([...searchParams]),category:"ALL",subcategory:"ALL"})
                handleExpanded("none")
            } else {
                setSearchParams({...Object.fromEntries([...searchParams]),category:name[1]})
                handleExpanded(name[1])
            }
        }
        name[0] === "subcategory" && setSearchParams({...Object.fromEntries([...searchParams]),subcategory:name[1]})
    }

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
						<SelectForm
							value={size}
							handleChange={handleSelect}
							helperText="Cantidad de items"
						/>
						<SearchForm/>
						{Object.entries(itemCategories).map((category)=>{
							return (
								<FilterAccordion 
									key={category[1].id} 
									id={category[1].id} 
									label={category[1].label} 
									subcategories={category[1].subcategories} 
									expanded={expanded} 
									checkExpanded={handleExpanded}
									handleClick={handleClick}
								/>
							)
						})}
						<Divider style={{width:'100%'}} />
					</Box>
				</Grid>
				<Divider orientation="vertical" flexItem />
				<Grid item container pt={2} pb={2} sm={8.95} xs={11.95} justifyContent="center" sx={{backgroundColor:"rgb(240, 240, 240)"}}>
					<ItemList detail={showDetail}/>
					{ (page && total && total !== 0 && size) ?
					<Pagination 
						count={Math.trunc(total/size)+1} 
						page={Number(page)} 
						onChange={handleChange} 
						siblingCount={1} 
						boundaryCount={1}
					/> : <div></div>
					}
				</Grid>
			</Grid>
		)
	}
