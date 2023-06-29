/*
 * **********************************************************************************
 * Prueba: Crear blog sencillo CRUD
 * **********************************************************************************
 *
 * File name: image.routes.js
 * Version: 1.0
 * Created: 29/06/2023
 * Last Modified:
 * Author: David Arango.
 * Description: API routes for images
 */

import { Router } from "express";
import { uploadImage } from "../controllers/picture.controller.js";

const router = Router();

// prettier-ignore
router.route("/")
	.post(uploadImage);

export default router;
