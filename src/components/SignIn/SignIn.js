import React from 'react';
import classes from "./SignIn.module.css";
import { Link } from "react-router-dom";

const SignIn = () => {
    return (
		<div className={classes.signInContent}>
			<div className="container">
				<div className="row">
					<div className="col-md-12 col-xs-12">
						<div className={classes.signIn}>
							<form>
								<h3>Royhatdan o'tish</h3>
								<input type="text" placeholder="Ismimgizni kiriting..." />
								<input type="text" placeholder="Familyangizni kiriting..." />
								<input type="tel" placeholder="Telefon raqamingizni kiriting..." />
								<div className={classes.selectCity}>
									<input type="text" placeholder="Davlat nomini kiriting..." />
									<select>
										<option value="Uzbekistan">Uzbekistan</option>
										<option value="Russia">Russia</option>
										<option value="USA">USA</option>
									</select>
								</div>
								<div className={classes.selectCity}>
									<input type="text" placeholder="Shahar/Tuman nomini kiriting..." />
									<select>
										<option value="Fargona">Fargona</option>
										<option value="Fargona">Fargona</option>
										<option value="Fargona">Fargona</option>
									</select>
								</div>
								<input type="password" placeholder="Parol o'ylab toping" />
								<input type="password" placeholder="Parolni tasdiqlang" />
								<button type="submit">Ro'yhatdan o'tish</button>
							</form>
							<p>Profilingiz mavjudmi? <Link to="/">Kirish</Link></p>
						</div>
					</div>
				</div>
			</div>
		</div>
    );
};

export default SignIn;
