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

export default function PostListItem(props) {
  const { post } = props;
  return (
    <div className="card  rounded-3  d-flex justify-content-start  m-3">
      <section>
        <article>
          <Link
            to={"post/" + post.id}
            style={{ textDecoration: "none", color: "black" }}
          >
            <div>
              <p> {post.title}</p>
              <p> {post.image}</p>
            </div>
          </Link>
          <p> {post.content}</p>
        </article>
      </section>
    </div>
  );
}
