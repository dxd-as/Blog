/*
 * **********************************************************************************
 * Prueba: Crear blog sencillo CRUD
 * **********************************************************************************
 *
 * File name: picture.controller.js
 * Version: 1.0
 * Created: 02/07/2023
 * Last Modified:
 * Author: David Arango.
 * Description: verify if the file uploaded is a image or not
 */

export const checkImage = (req, res, next) => {
	const image = req.file;
	const allowedFiles = ["png", "jpg", "jpeg", "gif"];
	const allowedFileTypes = ["image/png", "image/jpeg"];

	const fileExtension = image.originalname.slice(
		image.originalname.lastIndexOf(".") + 1
	);
	console.log("file extension " + fileExtension);
	if (
		!allowedFiles.includes(fileExtension) ||
		!allowedFileTypes.includes(image.mimetype)
	) {
		throw Error("Invalid file");
	} else {
		return next();
	}
};
