import React from 'react';
import classes from "./Header.module.css";
import {Link} from "react-router-dom";

const Header = () => {
    return (
    	<header className={classes.Header}>
    		<div className="container">
    			<div className="row">
    				<div className="col-md-2">
    					
    				</div>
    				<div className="col-md-10">
    					<div>
    						<ul>
    							<li>
    								<Link to="/">Bosh sahifa</Link>
    							</li>
								<li>
									<Link to="/">Bosh sahifa</Link>
								</li>
								<li>
    								<Link to="/">Bosh sahifa</Link>
    							</li>
								<li>
									<Link to="/">Bosh sahifa</Link>
								</li>
    						</ul>
    					</div>
    				</div>
    			</div>
    		</div>
    	</header>
    );
};

export default Header;
