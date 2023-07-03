/*
 * **********************************************************************************
 * Prueba: Crear blog sencillo CRUD
 * **********************************************************************************
 *
 * File name: Feed.jsx
 * Version: 1.0
 * Created: 27/06/2023
 * Last Modified:
 * Author: David Arango.
 * Description: View for the feed. It renders all the posts
 */

import MainLayout from "../layouts/MainLayout";
import PostList from "../components/Feed/PostList";

export default function Feed() {
	return (
		<MainLayout>
			<div className="d-flex justify-content-center">
				<PostList />
			</div>
		</MainLayout>
	);
}
