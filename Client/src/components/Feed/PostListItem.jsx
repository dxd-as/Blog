/*
 * **********************************************************************************
 * Prueba: Crear blog sencillo CRUD
 * **********************************************************************************
 *
 * File name: PostListItem.jsx
 * Version: 1.0
 * Created: 28/06/2023
 * Last Modified:
 * Author: David Arango.
 * Description: Component PostListITem. Card for each Post that will be render in
 * PostList.
 */

import { Link } from "react-router-dom";
import { TrashFill } from "react-bootstrap-icons";
import "moment/locale/es";
import moment from "moment";
import Swal from "sweetalert2";

export default function PostListItem(props) {
	const { post } = props;
	const { deletePost } = props;

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

	return (
		<article className="card card-feed rounded-3  d-flex flex-column align-items-center">
			<div className="w-100">
				{/* Titulo e imagen */}
				<Link
					className="link-text d-flex flex-column align-items-center"
					to={"post/" + post.id}
				>
					<h2 className="text-center font-family--Montserrat-font">
						{post.title}
					</h2>

					{post.image && (
						<img
							className="post-image mb-2"
							src={`http://localhost:3001/${post.image}`}
							alt="post_image"
						></img>
					)}
				</Link>

				{/* Resumen */}
				<div className="d-flex flex-column justify-content-start">
					<p className="font-family--Montserrat-font">
						{post.content.substring(0, 50)}
						<Link
							className="font-family--Montserrat-font"
							to={"post/" + post.id}
						>
							...leer más
						</Link>
					</p>
				</div>

				{/* Footer */}
				<div className=" d-flex justify-content-between">
					<button
						className="btn btn-outline-danger"
						data-bs-toggle="tooltip"
						data-bs-placement="bottom"
						data-bs-title="Eliminar post"
						onClick={() => {
							handleDelete(post.id, post.image);
						}}
					>
						<TrashFill />
					</button>

					<p className="text-secondary m-0 ">
						{moment(post.createdAt).format("DD MMMM YYYY HH:mm")}{" "}
					</p>
				</div>
			</div>
		</article>
	);
}
