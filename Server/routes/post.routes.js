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

import { Router } from 'express';
import { deletePost, findAll, savePost } from '../Controllers/post.controller.js';

const router = Router();

router.route("/")
	.post(savePost)
	.get(findAll)
	//.put(updatePost)
	.delete(deletePost)

export default router;
