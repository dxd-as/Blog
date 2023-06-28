/*
 * **********************************************************************************
 * Prueba: Crear blog sencillo CRUD
 * **********************************************************************************
 *
 * File name: post.routes.js
 * Version: 1.0
 * Created: 26/06/2023
 * Last Modified:
 * Author: David Arango.
 * Description: API routes to the controllers
 */

import { Router } from "express";
import {
  deletePost,
  findAll,
  findOne,
  savePost,
  updatePost,
} from "../Controllers/post.controller.js";

const router = Router();

// prettier-ignore
router.route("/")
	.post(savePost)
	.get(findAll);

// prettier-ignore
router.route("/:id")
	.patch(updatePost)
	.delete(deletePost)
	.get(findOne);

export default router;
