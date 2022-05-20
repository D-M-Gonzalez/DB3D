import React, {createContext, useState, useEffect} from 'react'
import { Routes, Route } from "react-router-dom";
import ItemDetailContainer from './container/ItemDetailContainer/ItemDetailContainer';
import ItemList from './container/Item/ItemList';
import ItemListContainer from './container/ItemListContainer/ItemListContainer';
import Layout from './container/Layout/Layout';
import Home from './container/Home/Home';
import Contact from './container/Contact/Contact';
import Checkout from './container/Checkout/Checkout';
import { ThemeProvider } from '@mui/material/styles';
import { customTheme } from './MuiTheme';
import { findProducts } from './controllers/findProducts';

export const Global = createContext();

export default function App() {
	const [globalState, setGlobalState] = useState({
		cartList:[],
		totalItems: 0,
		update: (data) => updateGlobal(data),
	})
	
	const updateGlobal = (data) => {
		setGlobalState(data);
		getTotalItems(data)
	}

	const getTotalItems = (data) => {
		let cant = 0;
		data.cartList.forEach((item)=>{
			cant = cant + Number(item.cant)
		})
		setGlobalState({...data,totalItems:cant})
	}

  	return (
		<Global.Provider value={globalState}>
			<ThemeProvider theme={customTheme}>
				<Routes>
					<Route path="/" element={<Layout/>}>
						<Route path="home" element={<Home/>}/>
						<Route path="items/" element={<ItemListContainer/>}>
							<Route path="list" element={<ItemList/>}/>
						</Route>
						<Route path="detail/:id" element={<ItemDetailContainer/>}/>
						<Route path="contact" element={<Contact/>}/>
						<Route path="checkout" element={<Checkout/>}/>
					</Route>
				</Routes>
			</ThemeProvider>
		</Global.Provider>
	)
}
