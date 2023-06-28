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

export default function Post() {
  return (
    <div>
      <Layout>
        <PostCard />
      </Layout>
    </div>
  );
}
