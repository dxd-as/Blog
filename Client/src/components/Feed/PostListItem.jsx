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
		<div className="card  rounded-3  d-flex flex-column align-items-center  m-3">
			<div className="row">
				<div className="col-12">
					<section className="d-inline-flex w-100">
						<article>
							<div>
								<Link className="link-text" to={"post/" + post.id}>
									<div className="d-flex justify-content-center">
										<h2 className="font-family--Montserrat-font">
											{" "}
											{post.title}
										</h2>
									</div>
									<div className="d-flex justify-content-center">
										{post.image && (
											<img
												className="post-image mx-auto mb-2"
												src={`http://localhost:3001/${post.image}`}
												alt="post_image"
											></img>
										)}
									</div>
								</Link>
							</div>
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
						</article>
					</section>
				</div>
			</div>

			<div className="col-12 d-flex justify-content-between">
				<div>
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
				</div>
				<div>
					<p className="text-secondary m-0 ">
						{moment(post.createdAt).format("DD MMMM YYYY HH:mm")}{" "}
					</p>
				</div>
			</div>
		</div>
	);
}
