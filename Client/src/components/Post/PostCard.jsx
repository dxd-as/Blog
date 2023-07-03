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
import { useState, useEffect } from "react";
import EditPostCard from "./EditPostCard";
import Swal from "sweetalert2";

export default function PostCard(props) {
	const { post } = props;
	const { deletePost } = props;
	const [edit, SetEdit] = useState();

	useEffect(() => {
		SetEdit(false);
	}, []);

	const handleDelete = (id, image) => {
		Swal.fire({
			title: `¿Deseas borrar este post?`,
			text: "Esta acción no se puede revertir.",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Borrar",
			cancelButtonText: "Cancelar",
		}).then((result) => {
			if (result.isConfirmed) {
				deletePost(id, image);
			}
		});
	};

	const handleEdit = () => {
		SetEdit(!edit);
	};

	return (
		<>
			{!edit && (
				<div className="card card-post  rounded-3  d-flex align-items-center w-75 m-3">
					<div className="w-100 d-flex flex-column align-items-center">
						<h2 className=" font-family--Montserrat-font"> {post.title}</h2>
						{post.image && (
							<img
								className="post-image  mb-2"
								src={`http://localhost:3001/${post.image}`}
								alt="post_image"
							></img>
						)}
						<pre className="font-family--Montserrat-font">{post.content}</pre>
						<div className="d-flex w-100 justify-content-between align-items-center">
							<div>
								<button
									className="btn btn-outline-danger  m-2"
									data-bs-toggle="tooltip"
									data-bs-placement="bottom"
									data-bs-title="Eliminar post"
									onClick={() => {
										handleDelete(post.id, post.image);
									}}
								>
									BORRAR
								</button>
								<button
									className="btn btn-outline-warning  m-2"
									data-bs-toggle="tooltip"
									data-bs-placement="bottom"
									data-bs-title="Editar post"
									onClick={() => {
										handleEdit();
									}}
								>
									EDITAR
								</button>
							</div>
							<p className="text-secondary m-0">
								{moment(post.createdAt).format("DD MMMM YYYY HH:mm")}{" "}
							</p>
						</div>
					</div>
				</div>
			)}

			{edit && <EditPostCard post={post} handleEdit={handleEdit} />}
		</>
	);
}
