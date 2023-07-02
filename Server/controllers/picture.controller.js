/*
 * **********************************************************************************
 * Prueba: Crear blog sencillo CRUD
 * **********************************************************************************
 *
 * File name: picture.controller.js
 * Version: 1.0
 * Created: 29/06/2023
 * Last Modified:
 * Author: David Arango.
 * Description: Handle logic behind validating request parameters, query,
 * sending Responses with correct codes.
 */

import multer from "multer";
import path from "path";
import { checkImage } from "../middleware/picture.middleware.js";
import fs from "fs";

var imageName = "";

const storage = multer.diskStorage({
	destination: path.join("./Server/Images_Uploaded"),
	filename: function (req, file, cb) {
		imageName = Date.now() + path.extname(file.originalname);
		cb(null, imageName);
	},
});

const upload = multer({
	storage: storage,
	limits: { fileSize: 3000000 },
}).single("myImage");

export const uploadImage = async (req, res, next) => {
	upload(req, res, (err) => {
		if (err) {
			console.log(err);
			return res.status(400).json({ error: "Failed to upload file." });
		}
		try {
			checkImage(req, res, next);
		} catch (error) {
			fs.unlinkSync(req.file.path);
			return res.status(400).json({ error: error.message });
		}

		return res.status(200).json({
			url: "Server/Images_Uploaded/" + imageName,
		});
	});
};
