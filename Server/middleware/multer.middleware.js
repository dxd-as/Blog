/*
 * **********************************************************************************
 * Prueba: Crear blog sencillo CRUD
 * **********************************************************************************
 *
 * File name: multer.middleware.js
 * Version: 1.0
 * Created: 29/06/2023
 * Last Modified:
 * Author: David Arango.
 * Description: Multer middleware. Allows the server to handle the uploaded image
 * from client/react component
 */

/* import multer from "multer";
import path from "path";

var imageName = "";

const storage = multer.diskStorage({
	destination: path.join("./Server/Images_Uploaded"),
	filename: function (req, res, cb) {
		imageName = Date.now() + path.extname(file.originalname);
		cb(null, imageName);
	},
});

export const upload = multer({
	storage: storage,
	limits: { fileSize: 3000000 },
}).single("myImage");
 */
