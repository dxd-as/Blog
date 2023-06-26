/*
 * **********************************************************************************
 * Prueba: Crear blog sencillo CRUD
 * **********************************************************************************
 *
 * File name: post.model.js
 * Version: 1.0
 * Created: 26/06/2023
 * Last Modified:
 * Author: David Arango.
 * Description: Schema definition of Post Model.
 */

import { DataTypes } from "sequelize";
import { mySqlConnection } from "../mySql.js";


export class post {
	constructor({ title, content, image }) {
		this.title = title;
		this.content = content;
		this.image = image;
	}
}

export const Post = mySqlConnection.define('post', {
	id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true
	},
	title: {
		type: DataTypes.TEXT,
		allowNull: false
	},
	content: {
		type: DataTypes.TEXT,
		allowNull: false
	},
	image: {
		type: DataTypes.TEXT,
		allowNull: false
	}
}, {
	underscored: true, timestamps: true
});