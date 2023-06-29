/*
 * **********************************************************************************
 * Prueba: Crear blog sencillo CRUD
 * **********************************************************************************
 *
 * File name: app.js
 * Version: 1.0
 * Created: 26/06/2023
 * Last Modified:
 * Author: David Arango.
 * Description: File initialize the server
 */

import express from "express";
import { mySqlConnection } from "./database/mySql.js";
import { Post } from "./database/models/post.model.js";
import feedRouter from "./routes/post.routes.js";
import imageRouter from "./routes/image.routes.js";
import cors from "cors";
import config from "./settings/config.js";

class App {
	constructor() {
		this.app = express();
		this.settings();
		this.routes();
		this.init();
	}

	init() {
		mySqlConnection
			.authenticate()
			.then(() => {
				console.log("Connection has been established successfully.");

				/* 	User.sync() - This creates the table if it doesn't exist (and does nothing if it already exists)
					User.sync({ force: true }) - This creates the table, dropping it first if it already existed
					User.sync({ alter: true }) - This checks what is the current state of the table in the database
					(which columns it has, what are their data types, etc), and then performs the necessary changes
					in the table to make it match the model.
				*/
				Post.sync()
					.then(() => {
						console.log("Post table created successfully");
					})
					.catch((err) => {
						console.error("Error. Can not create Post table" + err.message);
					});
				try {
					this.app.listen(config.app.port);
					console.log(`Server started in the port ${config.app.port}`);
				} catch (err) {
					console.error(`Error initializing server`, err.message);
				}
			})
			.catch((err) => {
				console.log("Error: Unable to connect with DB");
				console.log(err);
			});
	}
	routes() {
		this.app.use("/feed", feedRouter);
		this.app.use("/image", imageRouter);
	}

	settings() {
		this.app.use(express.json());
		this.app.use(cors());
		this.app.use(express.urlencoded({ extended: false }));
		this.app.use("/image", express.static("image"));
	}
}

new App();
