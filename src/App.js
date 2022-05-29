import React, {createContext } from 'react'
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
import Signup from './container/Signup/Signup';
import ModifyUser from './container/ModifyUser/ModifyUser';
import Login from './container/Login/Login';
import UserOrderList from './container/UserOrderList/UserOrderList';
import SingleOrderList from './container/SingleOrderList/SingleOrderList';
import Error404 from './container/Error404/Error404';
import './swal.css';

export const Global = createContext();

export default function App() {

  	return (
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
						<Route path="signup" element={<Signup/>}/>
						<Route path="login" element={<Login/>}/>
						<Route path="modifyuser" element={<ModifyUser/>}/>
						<Route path="userorders/:id" element={<UserOrderList/>}/>
						<Route path="order/:id" element={<SingleOrderList/>}/>
						<Route path="*" element={<Error404/>}/>
					</Route>
				</Routes>
			</ThemeProvider>
	)
}
