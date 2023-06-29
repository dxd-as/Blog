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

export default function PostListItem(props) {
	const { post } = props;
	const { deletePost } = props;

	const handleDelete = (id) => {
		deletePost(id);
	};

	return (
		<div className="card  rounded-3  d-flex justify-content-start  m-3">
			<section>
				<article>
					<Link
						className="link-text"
						to={"post/" + post.id}
						/* style={{ textDecoration: "none", color: "black" }} */
					>
						<div>
							<h2> {post.title}</h2>
							<img
								className="post-image  mb-2"
								src={post.image}
								alt="post_image"
							></img>
						</div>
					</Link>
					<p> {post.content}</p>
					<div>
						<button
							className="btn btn-outline-danger"
							data-bs-toggle="tooltip"
							data-bs-placement="bottom"
							data-bs-title="Eliminar perfil"
							onClick={() => {
								handleDelete(post.id);
							}}
						>
							<TrashFill />
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
