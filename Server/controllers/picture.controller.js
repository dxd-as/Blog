/*
 * **********************************************************************************
 * Prueba: Crear blog sencillo CRUD
 * **********************************************************************************
 *
 * File name: image.controller.js
 * Version: 1.0
 * Created: 29/06/2023
 * Last Modified:
 * Author: David Arango.
 * Description: Handle logic behind validating request parameters, query,
 * sending Responses with correct codes.
 */

import multer from "multer";
import path from "path";

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

export const uploadImage = async (req, res) => {
	upload(req, res, (err) => {
		if (err) {
			console.log(err);
		} else {
			return res.status(200).json({
				url: "http://localhost:3001/Images_Uploaded/" + imageName,
			});
		}
	});
};
