import dotenv from 'dotenv';

dotenv.config();

const config = {
	app: {
		port: process.env.SERVER_PORT
	},
	db: {
		host: process.env.DB_HOST,
		database: process.env.DB_DATABASE,
		username: process.env.DB_USERNAME,
		password: process.env.DB_PASSWORD,
		port: process.env.DB_PORT,
		dialect: 'mysql',
		timezone: process.env.DB_TIMEZONE
	}
}

export default config;