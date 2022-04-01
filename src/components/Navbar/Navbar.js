import React from 'react';
import classes from "./Navbar.module.css";
import { NavLink, Link } from "react-router-dom";
import {FaBars} from "react-icons/fa";

const Navbar = () => {
    return (
		<div className={classes.df}>
			<div className={classes.logo}>
				<h2><Link to="/">Musofirlar</Link></h2>
			</div>
			<div className={classes.iconBars}>
				<FaBars />
			</div>
			<div className={classes.navbarConetn}>
				<ul className={classes.Navbar}>
					<li>
						<NavLink to="/">Bosh sahifa</NavLink>
					</li>
					<li>
						<NavLink to="/">Ijara uylar</NavLink>
					</li>
					<li>
						<NavLink to="/">Ish topish</NavLink>
					</li>
					<li>
						<NavLink to="/">Elchixonalar</NavLink>
					</li>
					<li>
						<NavLink to="/">O'zbek oshxonasi</NavLink>
					</li>
					<li>
						<NavLink to="/">Qoshimcha xizmatlar</NavLink>
					</li>
					<li>
						<NavLink to="/">Biz haqimizda</NavLink>
					</li>
				</ul>
				<div className={classes.languageSign}>
					<div className={classes.Select}>
						<select name="select">
							<option value="uz">Uz</option>
							<option value="ru">Ru</option>
						</select>
					</div>
					<div className={classes.signInBtn}>
						<button>Kirish</button>
					</div>
				</div>
			</div>
		</div>
    );
};

export default Navbar;
