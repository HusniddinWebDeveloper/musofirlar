import React from 'react';
import classes from "./Footer.module.css";
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <footer className={classes.Footer}>
        	<div className="container">
        		<div className="row">
        			<div className="col-md-4 col-xs-12">
        				<div className={classes.aboutFooter}>
                            <h3>Musofirlar</h3>
                            <p>Musofir.biz yordaimda ozingizga mos va hamyonbop ijaraga uylarni topishingiz mumkun.</p>
                        </div>
        			</div>
					<div className="col-md-2 col-xs-12">
        				<div className={classes.footerNav}>
                            <ul>
                                <li>
                                    <Link to="/">Bosh sahifa</Link>
                                </li>
                                <li>
                                    <Link to="/">Ijara uylar</Link>
                                </li>
                                <li>
                                    <Link to="/">Ish topish</Link>
                                </li>
                                <li>
                                    <Link to="/">Elchixonalar</Link>
                                </li>
                                <li>
                                    <Link to="/">O’zbek oshxona</Link>
                                </li>
                            </ul>
                        </div>
        			</div>
        			<div className="col-md-3 col-xs-12">
                        <div className={classes.footerNav}>
                            <ul>
                                <li>
                                    <Link to="/">Masjidlar</Link>
                                </li>
                                <li>
                                    <Link to="/">Qo’shimcha ma’lumotlar</Link>
                                </li>
                                <li>
                                    <Link to="/">Biz haqimizda</Link>
                                </li>
                                <li>
                                    <Link to="/">Ko’p beriladigan savollar</Link>
                                </li>
                                <li>
                                    <Link to="/">Linkedin</Link>
                                </li>
                            </ul>
                        </div>
        			</div>
        			<div className="col-md-2">
                        <div className={classes.footerNav}>
                            <ul>
                                <li>
                                    <Link to="/">Telegram</Link>
                                </li>
                                <li>
                                    <Link to="/">Twitter</Link>
                                </li>
                                <li>
                                    <Link to="/">Facebook</Link>
                                </li>
                                <li>
                                    <Link to="/">Instagram</Link>
                                </li>
                                <li>
                                    <Link to="/">Bosh sahifa</Link>
                                </li>
                            </ul>
                        </div>
        			</div>
        		</div>
                <div className={classes.line}></div>
        	</div>
        </footer>
    );
};
export default Footer;
