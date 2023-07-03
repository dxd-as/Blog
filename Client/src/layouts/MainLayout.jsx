/*
 * **********************************************************************************
 * Prueba: Crear blog sencillo CRUD
 * **********************************************************************************
 *
 * File name: MainLayout.jsx
 * Version: 1.0
 * Created: 27/06/2023
 * Last Modified:
 * Author: David Arango.
 * Description: Component for the main layout in the whole app.
 */

import Header from "../components/common/Header";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

export default function MainLayout(props) {
	return (
		<div
			className="d-flex flex-column min-vh-100 bg-body w-100"
			id="main-layout"
		>
			<Header />
			<Navbar />
			<main className="d-flex flex-column align-items-center flex-grow-1">
				{props.children}
			</main>
			<Footer />
		</div>
	);
}
