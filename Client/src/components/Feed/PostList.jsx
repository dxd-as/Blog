/*
 * **********************************************************************************
 * Prueba: Crear blog sencillo CRUD
 * **********************************************************************************
 *
 * File name: PostList.jsx
 * Version: 1.0
 * Created: 28/06/2023
 * Last Modified:
 * Author: David Arango.
 * Description: Component PostList. Contains all PostListItem
 */

import { useEffect, useState } from "react";
import PostListItem from "./PostListItem";
import { HTTP_REQ } from "../../common/enums";

export default function PostList() {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		getPosts();
	}, []);

	const getPosts = () => {
		fetch(`${HTTP_REQ.URL}/feed`, {
			method: "GET",
		})
			.then(async (res) => {
				if (res.status === 200) {
					const post = await res.json();
					setPosts(post.post);
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
					getPosts();
				} else {
					const data = await res.json();
					alert(data.msg);
				}
			})
			.catch((err) => console.log(err));
	};

	return (
		<div>
			{posts.map((post, index) => (
				<PostListItem post={post} key={index} deletePost={deletePost} />
			))}
		</div>
	);
}
