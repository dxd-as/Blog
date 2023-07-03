/*
 * **********************************************************************************
 * Prueba: Crear blog sencillo CRUD
 * **********************************************************************************
 *
 * File name: Layout.jsx
 * Version: 1.0
 * Created: 27/06/2023
 * Last Modified:
 * Author: David Arango.
 * Description: Component Layout. Stablish the layout there where new entry button
 * is not needed
 */

import Header from "../components/common/Header";
/* import Navbar from "../components/common/Navbar"; */
import Footer from "../components/common/Footer";

export default function Layout(props) {
	return (
		<div className="d-flex flex-column min-vh-100 bg-body" id="layout">
			<Header />
			<main className="min-vh-100">{props.children}</main>
			<Footer />
		</div>
	);
}
