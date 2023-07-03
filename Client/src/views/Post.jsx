/*
 * **********************************************************************************
 * Prueba: Crear blog sencillo CRUD
 * **********************************************************************************
 *
 * File name: Posts.jsx
 * Version: 1.0
 * Created: 28/06/2023
 * Last Modified:
 * Author: David Arango.
 * Description: View that shows the whole Post. Allows delete and edit.
 */

import PostCard from "../components/Post/PostCard";
import Layout from "../layouts/Layout";
import { HTTP_REQ, ROUTES } from "../common/enums";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Post() {
	const { id } = useParams();
	const [post, setPost] = useState({});
	const navigate = useNavigate();

	useEffect(() => {
		getPost();
		console.log("id changed:", id);
	}, [id]);

	const getPost = () => {
		fetch(`${HTTP_REQ.URL}/feed/${id}`, {
			method: "GET",
		})
			.then(async (res) => {
				if (res.status === 200) {
					const postId = await res.json();
					setPost(postId.post);
				} else {
					const data = await res.json();
					alert(data.msg);
				}
			})
			.catch((err) => console.log(err));
	};

	const deletePost = (id, image) => {
		fetch(`${HTTP_REQ.URL}/feed/${id}`, {
			method: "DELETE",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ image: image }),
		})
			.then(async (res) => {
				if (res.status === 200) {
					navigate(`${ROUTES.FEED}`);
				} else {
					const data = await res.json();
					alert(data.msg);
				}
			})
			.catch((err) => console.log(err));
	};

	return (
		<Layout>
			<PostCard post={post} deletePost={deletePost} />
		</Layout>
	);
}
