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

	const handleDelete = (id, image) => {
		deletePost(id, image);
	};

	return (
		<div className="card  rounded-3  d-flex justify-content-start  m-3">
			<section>
				<article>
					<Link className="link-text" to={"post/" + post.id}>
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
					</Link>
					<p>
						{" "}
						{post.content.substring(0, 50)}{" "}
						<Link to={"post/" + post.id}>...leer más</Link>
					</p>
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
						<p className="text-secondary m-0">
							{moment(post.createdAt).format("DD MMMM YYYY HH:mm")}{" "}
						</p>
					</div>
				</article>
			</section>
		</div>
	);
}
