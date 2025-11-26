export default {
    jwtSecret: "SUPER_SECRET",
    dbConnection: {
        client: 'pg',
        searchPath: ['todo', 'public'],
        connection: {
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
            port: process.env.DB_PORT,
        },
        pool: { min: 0, max: 2 },
    }
}