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

export default function PostListItem(props) {
  const { post } = props;
  return (
    <div className="card  rounded-3  d-flex justify-content-start  m-3">
      <section>
        <article>
          <p> {post.title}</p>
          <p> {post.content}</p>
          <p> {post.image}</p>
        </article>
      </section>
    </div>
  );
}
