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
import { HTTP_REQ } from "../../common/enums";
import { useNavigate } from "react-router-dom";

export default function EditPostCard(props) {
	const { post } = props;
	const { handleEdit } = props;
	const navigate = useNavigate();

	const [imageFile, setImageFile] = useState();
	const [selectedImage, setSelectedImage] = useState(
		`http://localhost:3001/${post.image}` || ""
	);
	const [formState, setFormState] = useState({
		title: post.title,
		content: post.content,
		image: post.image,
		prevImage: post.image,
	});

	const getImage = (event) => {
		setImageFile(event.target.files[0]);
	};

	const handleImageChange = (event) => {
		const file = event.target.files[0];

		if (file) {
			const reader = new FileReader();
			reader.onload = async () => {
				setSelectedImage(reader.result);
				const formData = new FormData();
				formData.append("myImage", file);
				try {
					const res = await fetch(`${HTTP_REQ.URL}/picture`, {
						method: "POST",
						body: formData,
					});
					if (res.status === 200) {
						const data = await res.json();
						console.log("image uploaded");
						setFormState((prevFormState) => ({
							...prevFormState,
							image: data.url,
						}));
					} else {
						console.log("error");
					}
				} catch (err) {
					console.log(err);
				}
			};
			reader.readAsDataURL(file);
		}
	};

	const handleTextChange = (event) => {
		setFormState({ ...formState, [event.target.name]: event.target.value });
	};

	const updatePost = (formState) => {
		fetch(`${HTTP_REQ.URL}/feed/${post.id}`, {
			method: "PATCH",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(formState),
		})
			.then(async (res) => {
				if (res.status === 200) {
					navigate("/");
				} else {
					const data = await res.json();
					alert(data.msg);
				}
			})
			.catch((err) => console.log(err));
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		if (imageFile) {
			const formData = new FormData();
			formData.append("myImage", imageFile);
			try {
				const res = await fetch(`${HTTP_REQ.URL}/picture`, {
					method: "POST",
					body: formData,
				});

				if (res.status === 200) {
					const data = await res.json();
					console.log("image uploaded");
					const updatedFormState = { ...formState, image: data.url };
					updatePost(updatedFormState);
					navigate("/");
				} else {
					console.log("error");
				}
			} catch (err) {
				console.log(err);
			}
		} else {
			updatePost(formState);
			navigate("/");
		}
	};

	return (
		<div className="card card-post  rounded-3  d-flex align-items-center w-75 m-3">
			<div className="w-100 d-flex flex-column align-items-center">
				<form
					className="w-100 d-flex flex-column align-items-center"
					onSubmit={handleSubmit}
				>
					{/* <label for="title">Título</label> */}
					<input
						type="text"
						className="form-control mb-2 p-2 font-family--Montserrat-font"
						value={formState.title}
						onChange={handleTextChange}
						name="title"
						id="title"
					></input>
					{post.image && (
						<label>
							<input
								className="post-image m-2"
								name="image"
								type="file"
								style={{ display: "none" }}
								onChange={handleImageChange}
							></input>
							{selectedImage && (
								<img
									className="post-image mb-2"
									src={selectedImage}
									alt="post_image"
								></img>
							)}
						</label>
					)}
					{!post.image && (
						<div className="form-group m-2">
							<input
								type="file"
								onChange={getImage}
								className="form-control-file  mt-3"
								accept="image/*"
							></input>
						</div>
					)}
					<textarea
						className="form-control m-2 font-family--Montserrat-font"
						name="content"
						id="content"
						rows={15}
						value={formState.content}
						onChange={handleTextChange}
					></textarea>
					<div className="d-flex w-100 justify-content-between align-items-center">
						<div>
							<button
								className="btn btn-outline-danger m-2"
								data-bs-toggle="tooltip"
								data-bs-placement="bottom"
								data-bs-title="Eliminar post"
								onClick={() => {
									handleEdit();
								}}
							>
								CANCELAR
							</button>
							<button
								type="submit"
								className="btn btn-outline-success  m-2"
								data-bs-toggle="tooltip"
								data-bs-placement="bottom"
								data-bs-title="Guardar post"
							>
								GUARDAR
							</button>
						</div>
						<p className="text-secondary m-0">
							{moment(post.createdAt).format("DD MMMM YYYY HH:mm")}{" "}
						</p>
					</div>
				</form>
				{/*


				<div>

				</div>

			</form>

			<div>

			</div> */}
			</div>
		</div>
	);
}
