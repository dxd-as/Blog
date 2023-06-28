/*
 * **********************************************************************************
 * Prueba: Crear blog sencillo CRUD
 * **********************************************************************************
 *
 * File name: NewPost.jsx
 * Version: 1.0
 * Created: 27/06/2023
 * Last Modified:
 * Author: David Arango.
 * Description: View for creating new post. Used in the route /new_post
 */

import Layout from "../layouts/Layout";
import NewPostCard from "../components/NewPost/NewPostCard";
import { HTTP_REQ } from "../common/enums";

export default function NewPost() {
  console.log(`${HTTP_REQ.URL}/feed`);
  const savePost = (newPost) => {
    fetch(`${HTTP_REQ.URL}/feed`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPost),
    });
  };

  return (
    <Layout>
      <NewPostCard savePost={savePost} />
    </Layout>
  );
}
