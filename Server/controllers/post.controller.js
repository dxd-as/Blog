/*
 * **********************************************************************************
 * Prueba: Crear blog sencillo CRUD
 * **********************************************************************************
 *
 * File name: post.controller.js
 * Version: 1.0
 * Created: 26/06/2023
 * Last Modified:
 * Author: David Arango.
 * Description: Handle logic behind validating request parameters, query,
 * sending Responses with correct codes.
 */

import { feedServiceMySql } from "../services/post.service.js";
import { newPost } from "../database/models/post.model.js";
import fs from "fs";

const feedService = new feedServiceMySql();

export const savePost = async (req, res) => {
	const post = new newPost(req.body);
	if (post.title === null || post.content === null || post.image === null) {
		return res.status(400).json({
			msg: "Check input data",
		});
	} else {
		feedService.save(post);
		return res.sendStatus(200);
	}
};

export const findAll = async (req, res) => {
	await feedService
		.findAll()
		.then((post) => {
			return res.json({
				msg: "data retrieved correctly",
				post,
			});
		})
		.catch((err) => {
			return res.status(500).json({
				msg: "Error. Data not retrieved",
				error: err,
			});
		});
};

export const findOne = async (req, res) => {
	const id = req.params.id;
	await feedService
		.findOne(id)
		.then((post) => {
			return res.status(200).json({
				msg: "data retrieved correctly",
				post,
			});
		})
		.catch((err) => {
			return res.status(500).json({
				msg: "Error. Data not retrieved",
				error: err,
			});
		});
};

export const deletePost = async (req, res) => {
	const id = req.params.id;
	const imagePath = req.body.image;

	if (imagePath) {
		fs.unlinkSync(imagePath);
	}
	feedService
		.removeOneById(id)
		.then((num) => {
			if (num === 0) {
				return res.status(404).json({
					msg: `Error. Can not delete post with ID ${id}`,
				});
			} else {
				return res.json({
					msg: `Post with ID ${id} has been deleted`,
				});
			}
		})
		.catch((err) => {
			return res.status(500).json({
				msg: "Error deleting post",
				error: err,
			});
		});
};

export const updatePost = async (req, res) => {
	const id = req.params.id;
	const { title, content, image, prevImage } = req.body;

	if (prevImage !== "") {
		if (image !== prevImage) {
			fs.unlinkSync(prevImage);
		}
	}

	feedService
		.updateOneById(id, title, content, image)
		.then((post) => {
			return res.json({
				msg: "Post updated",
				post,
			});
		})
		.catch((err) => {
			return res.status(500).json({
				msg: "Error. Can not update the post",
				error: err,
			});
		});
};
