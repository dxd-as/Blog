/*
 * **********************************************************************************
 * Prueba: Crear blog sencillo CRUD
 * **********************************************************************************
 *
 * File name: EditPostCard.js
 * Version: 1.0
 * Created: 27/06/2023
 * Last Modified:
 * Author: David Arango.
 * Description: EditPostCard component. Render in PostCard when Edit is active
 */

import "moment/locale/es";
import moment from "moment";
import { useState } from "react";

export default function EditPostCard(props) {
	const { post } = props;
	const [selectedImage, setSelectedImage] = useState(
		`http://localhost:3001/${post.image}` || ""
	);

	const handleImageChange = (event) => {
		const file = event.target.files[0];

		if (file) {
			const reader = new FileReader();
			reader.onload = () => {
				setSelectedImage(reader.result);
			};
			reader.readAsDataURL(file);
		}
	};

	return (
		<div className="card  rounded-3  d-flex justify-content-start  m-3">
			<div>
				<div>
					<label for="title">Título</label>
					<input
						type="text"
						className="form-control mb-2"
						value={post.title}
						name="title"
						id="title"
					></input>
				</div>
				<div>
					{post.image && (
						<label>
							<input
								type="file"
								style={{ display: "none" }}
								onChange={handleImageChange}
							></input>
							{selectedImage && (
								<img src={selectedImage} alt="post_image"></img>
							)}
						</label>
					)}
					{!post.image && (
						<div className="form-group m-2">
							<input
								type="file"
								/* onChange={getImage} */
								className="form-control-file  mt-3"
								accept="image/*"
							></input>
						</div>
					)}
				</div>
				<div>
					<textarea
						className="form-control m-2"
						name="post-text"
						id="post-text"
						rows={15}
						value={post.content}
					></textarea>
				</div>
			</div>
			<div>
				<button
					className="btn btn-outline-danger m-2"
					data-bs-toggle="tooltip"
					data-bs-placement="bottom"
					data-bs-title="Eliminar post"
					/* 				onClick={() => {
						handleDelete(post.id, post.image);
					}} */
				>
					BORRAR
				</button>
				<button
					className="btn btn-outline-warning  m-2"
					data-bs-toggle="tooltip"
					data-bs-placement="bottom"
					data-bs-title="Editar post"
					/* 		onClick={() => {
						handleEdit();
					}} */
				>
					EDITAR
				</button>
				<button
					className="btn btn-outline-success  m-2"
					data-bs-toggle="tooltip"
					data-bs-placement="bottom"
					data-bs-title="Guardar post"
					/* 					onClick={() => {
						handleSave();
					}} */
				>
					GUARDAR
				</button>
				<p className="text-secondary m-0">
					{moment(post.createdAt).format("DD MMMM YYYY HH:mm")}{" "}
				</p>
			</div>
		</div>
	);
}
