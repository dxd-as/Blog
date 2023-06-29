/*
 * **********************************************************************************
 * Prueba: Crear blog sencillo CRUD
 * **********************************************************************************
 *
 * File name: NewPostCard.jsx
 * Version: 1.0
 * Created: 27/06/2023
 * Last Modified:
 * Author: David Arango.
 * Description: Component NewPostCard. New entry window. Form and operations
 */

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { HTTP_REQ } from "../../common/enums";

export default function NewPostCard(props) {
	const { savePost } = props;
	const [formState, setFormState] = useState({
		title: "",
		content: "",
		image: "",
	});
	const [imageFile, setImageFile] = useState();

	const navigate = useNavigate();

	const getImage = (event) => {
		setImageFile(event.target.files[0]);
	};

	const uploadImage = (event) => {
		event.preventDefault();
		const formData = new FormData();
		formData.append("myImage", imageFile);

		fetch(`${HTTP_REQ.URL}/image`, {
			method: "POST",
			body: formData,
		})
			.then(async (res) => {
				if (res.status === 200) {
					const data = await res.json();
					console.log("image uploaded");
					setFormState((prevState) => ({ ...prevState, image: data.url }));
				} else {
					console.log("error");
				}
			})
			.catch((err) => console.log(err));
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		savePost(formState);
		setFormState({
			title: "",
			content: "",
			image: "",
		});
		navigate("/");
	};

	const handleOnChange = (event) => {
		setFormState({ ...formState, [event.target.name]: event.target.value });
	};
	return (
		<main className="d-flex justify-content-center min-vh-100">
			<div className="card">
				<div className="card-body">
					<p className="card-title d-flex justify-content-center font-family--Montserrat-font">
						{" "}
						Nueva Entrada
					</p>
					<div>
						<form onSubmit={handleSubmit}>
							<div className="form-group ">
								<input
									onChange={handleOnChange}
									type="text"
									className="form-control mt-3 "
									name="title"
									id="title"
									placeholder="Título"
								></input>
							</div>
							<div className="form-group">
								<textarea
									onChange={handleOnChange}
									className="form-control  mt-3"
									name="content"
									id="content"
									placeholder="Introducir texto del post"
								></textarea>
							</div>
							<div className="form-group m-2">
								<input
									type="file"
									onChange={getImage}
									className="form-control-file  mt-3"
									accept="image/*"
								></input>
								<button
									onClick={uploadImage}
									className="btn btn-outline-success"
								>
									Cargar imagen
								</button>
							</div>
							<div className="d-flex justify-content-center  mt-3">
								<button type="Submit" className="btn btn-outline-success">
									Guardar
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</main>
	);
}
