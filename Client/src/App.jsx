/*
 * **********************************************************************************
 * Prueba: Crear blog sencillo CRUD
 * **********************************************************************************
 *
 * File name: App.jsx
 * Version: 1.0
 * Created: 27/06/2023
 * Last Modified:
 * Author: David Arango.
 * Description: Defines the different routes for the website
 */

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ROUTES } from "./common/enums";
import Feed from "./views/Feed";
import NewPost from "./views/NewPost";

const router = createBrowserRouter([
  {
    path: ROUTES.FEED,
    element: <Feed />,
  },
  {
    path: ROUTES.NEW_POST,
    element: <NewPost />,
  },
  /*   {
    path: ROUTES.POSTS,
    element: <Post />,
  }, */
]);

export default function App() {
  return <RouterProvider router={router} />;
}
