import 'dotenv/config';
import { ApolloServer } from "@apollo/server";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import { expressMiddleware } from "@as-integrations/express5";
import express from "express";
import cors from "cors";
import http from "http";
import db from "./lib/database_connection.js";

// middlewares
import { authorization } from "./middleware/auth.js";

// error handler
import { rootErrorHandler } from "./error/root.js";

// graphql type definitions
import { typeDefs, resolvers } from "./graphql/index.mjs";

const serverWrapper = async () => {
    // Create an Express app and a HTTP server.
    const app = express();
    const httpServer = http.createServer(app);

    const server = new ApolloServer({
        typeDefs,
        resolvers,
        plugins: [
            ApolloServerPluginDrainHttpServer({ httpServer })
        ]
    });
    await server.start();

    app.use(
        cors(), 
        express.json()
    );
    app.use(express.urlencoded({ extended: true }));
    
    app.use('/health', (req, res) => {
        console.log('[INFO] Health check OK');
        res.status(200).send('OK');
    });

    // Graphql endpoint
    app.use("/graphql", authorization, expressMiddleware(server, {
        context: async ({ req }) => {
            return {
                db,
                user: req.user
            }
        }
    }));
    
    // Error Handler
    app.use(rootErrorHandler);

    // Start Http Server
    await new Promise(resolve => httpServer.listen({ port: process.env.SERVER_PORT}, resolve));
    console.log(`Server Started at port ${process.env.SERVER_PORT}!🚀`);
}

serverWrapper();