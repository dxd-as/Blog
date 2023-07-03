/*
 * **********************************************************************************
 * Prueba: Crear blog sencillo CRUD
 * **********************************************************************************
 *
 * File name: Navbar.jsx
 * Version: 1.0
 * Created: 27/06/2023
 * Last Modified:
 * Author: David Arango.
 * Description: Component Navbar. Used in the Main layout
 */

import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../common/enums";

export default function Navbar() {
	const navigate = useNavigate();

	return (
		<nav className="navbar navbar-expand-lg navbar-light p-3 bg-body-tertiary">
			<div className="container">
				<a className="navbar-brand d-flex align-items-center" href="#">
					<img
						src="/images/logo.png"
						alt="Logo"
						width="60"
						height="60"
						className="d-inline-block align-text-top"
					/>
				</a>
				<h1 className="navbar-text font-family--Caveat-font">
					Tu blog de ciclismo
				</h1>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarCollapse"
					aria-controls="navbarCollapse"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div
					className="collapse navbar-collapse justify-content-end"
					id="navbarCollapse"
				>
					<ul className="navbar-nav">
						<li className="nav-item">
							<button
								className="btn btn-outline-primary"
								onClick={() => navigate(`${ROUTES.NEW_POST}`)}
							>
								Nueva entrada
							</button>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}
