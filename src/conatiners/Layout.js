import React from 'react';
import Register from "../pages/Register/Register";
import { Routes, Route } from "react-router-dom";

const Layout = () => {
    return (
		<Routes>
			<Route path="/" element={<Register />} />
		</Routes>
    );
};

export default Layout;
