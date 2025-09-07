import 'dotenv/config';
import { ApolloServer } from "@apollo/server";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import { expressMiddleware } from "@as-integrations/express5";
import express from "express";
import cors from "cors";
import http from "http";

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
    app.use("/graphql", expressMiddleware(server));

    // Start Http Server
    await new Promise(resolve => httpServer.listen({ port: process.env.SERVER_PORT}, resolve));
    console.log(`Server Started at port ${process.env.SERVER_PORT}!🚀`);
}

serverWrapper();