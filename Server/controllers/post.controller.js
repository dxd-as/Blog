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

import { feedServiceMySql } from '../services/post.service.js';

const feedService = new feedServiceMySql();

export const savePost = async (req, res) => {
	const newPost = new Post(req.body);
	if (newPost.title === null || newPost.content === null || newPost.image === null) {
		return res.status(400).json({
			msg: 'Revisa los datos introducidos'
		});
	}
	else {
		feedService.save(newPost)
		return res.sendStatus(200);
	}
};

export const findAll = async (req, res) => {
	await feedService.findAll()
		.then((post) => {
			return res.json({
				msg: 'data retrieved correctly',
				post
			});
		})
		.catch((err) => {
			return res.status(500).json({
				msg: 'Error. Data not retrieved',
				error: err
			});
		});
};

export const deletePost = async (req, res) => {
	const id = req.params.id;
	feedService.removeOneById(id)
		.then((num) => {
			if (num === 0) {
				return res.status(404).json({
					msg: `Error. Can not delete post with ID ${id}`
				});
			} else return res.json({
				msg: `Post with ID ${id} has been deleted`
			});
		})
		.catch((err) => {
			return res.status(500).json({
				msg: 'Error deleting post',
				error: err
			});
		});
}