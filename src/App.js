import React from 'react'
import { Routes, Route } from "react-router-dom";
import ItemDetailContainer from './container/ItemDetailContainer/ItemDetailContainer';
import ItemList from './container/Item/ItemList';
import ItemListContainer from './container/ItemListContainer/ItemListContainer';
import Layout from './container/Layout/Layout';

export default function App() {
  	return (
		<Routes>
			<Route path="/" element={<Layout/>}>
				<Route path="items/" element={<ItemListContainer/>}>
					<Route path="list" element={<ItemList/>}/>
				</Route>
				<Route path="detail/:id" element={<ItemDetailContainer/>}/>
			</Route>
		</Routes>
  	)
}
