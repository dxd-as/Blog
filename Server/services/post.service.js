/*
 * **********************************************************************************
 * Prueba: Crear blog sencillo CRUD
 * **********************************************************************************
 *
 * File name: post.service.js
 * Version: 1.0
 * Created: 26/06/2023
 * Last Modified:
 * Author: David Arango.
 * Description: Database queries
 */


import { Sequelize, where } from 'sequelize';
import { Post } from '../database/models/post.model.js';

export class feedServiceMySql {
	save(newPost) {
		return Post.create(newPost);
	};

	findAll() {
		return Post.findAll();
	};

	removeOneById(id) {
		return Post.destroy({ where: { id } });
	}
}