/*
 * **********************************************************************************
 * Prueba: Crear blog sencillo CRUD
 * **********************************************************************************
 *
 * File name: mySql.js
 * Version: 1.0
 * Created: 26/06/2023
 * Last Modified:
 * Author: David Arango.
 * Description: Connection with database
 */

import { Sequelize } from "sequelize";
import config from "../settings/config.js";

export const mySqlConnection = new Sequelize({
	host: config.db.host,
	database: config.db.database,
	username: config.db.username,
	password: config.db.password,
	port: config.db.port,
	dialect: config.db.dialect,
	timezone: config.db.timezone,
});