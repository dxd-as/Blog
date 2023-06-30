/*
 * **********************************************************************************
 * Prueba: Crear blog sencillo CRUD
 * **********************************************************************************
 *
 * File name: PostCard.jsx
 * Version: 1.0
 * Created: 28/06/2023
 * Last Modified:
 * Author: David Arango.
 * Description: PostCard component. Render the whole post. Used in Post view
 */

import "moment/locale/es";
import moment from "moment";
import { useState } from "react";

export default function PostCard(props) {
	const { post } = props;
	const { deletePost } = props;
	const [edit, SetEdit] = useState(false);

	const handleDelete = (id, image) => {
		deletePost(id, image);
	};

	return (
		<div className="card  rounded-3  d-flex justify-content-start  m-3">
			<section>
				<article>
					<div>
						<h2> {post.title}</h2>
						{post.image && (
							<img
								className="post-image  mb-2"
								src={`http://localhost:3001/${post.image}`}
								alt="post_image"
							></img>
						)}
					</div>
					<p>{post.content}</p>
					<div>
						<button
							className="btn btn-outline-danger"
							data-bs-toggle="tooltip"
							data-bs-placement="bottom"
							data-bs-title="Eliminar perfil"
							onClick={() => {
								handleDelete(post.id, post.image);
							}}
						>
							BORRAR
						</button>
						<button
							className="btn btn-outline-warning"
							data-bs-toggle="tooltip"
							data-bs-placement="bottom"
							data-bs-title="Editar perfil"
						>
							EDITAR
						</button>
						<p className="text-secondary m-0">
							{moment(post.createdAt).format("DD MMMM YYYY HH:mm")}{" "}
						</p>
					</div>
				</article>
			</section>
		</div>
	);
}
