import React from 'react';
import Register from "../pages/Register/Register";
import { Routes, Route } from "react-router-dom";
import IjaraUy from '../pages/IjaraUy/IjaraUy';
import FindWork from '../pages/FindWork/FindWork';

const Layout = () => {
    return (
		<Routes>
			<Route path="/" element={<Register />} />
			<Route path="ijarauy" element={<IjaraUy />} />
			<Route path="/findwork" element={<FindWork />} />
		</Routes>
    );
};

export default Layout;
