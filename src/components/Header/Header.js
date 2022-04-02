import React, { useState } from 'react';
import classes from "./Header.module.css";
import { NavLink, Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import SignIn from "../SignIn/SignIn";

const Header = () => {
	const [date, setDate] = useState(new Date());
	setTimeout(() => {
		setDate(new Date());
	}, 1000);
    return (
    	<header className={classes.Header}>
			<Navbar />
			<div className={classes.dateContent}>
				<span>{Math.floor(date.getHours() / 10) >= 1 ? date.getHours() : `0${date.getHours()}`}</span> 
				<span>:</span>
				<span>{Math.floor(date.getMinutes() / 10) >= 1 ? date.getMinutes() : `0${date.getMinutes()}`}</span>
				<h4>Toshkent</h4>
			</div>
			<div className={classes.HeaderNav}>
	    		<div className="container">
	    			<div className="row">
	    				<div className="col-md-12">
							
	    				</div>
	    			</div>
					<SignIn />
    			</div>
				<div className={classes.opacity}></div>
    		</div>
    	</header>
    );
};

export default Header;
