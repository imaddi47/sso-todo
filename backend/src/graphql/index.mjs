import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import { mergeTypeDefs, mergeResolvers } from '@graphql-tools/merge';
import { loadFilesSync } from '@graphql-tools/load-files';

const typesArray = [...loadFilesSync(path.join(__dirname, './query-defs/*.graphql')), ...loadFilesSync(path.join(__dirname, './mutation-defs/*.graphql'))];

const resolverArray = loadFilesSync(path.join(__dirname, "./resolvers/*.js"));

// console.log({typesArray, resolverArray});

const typeDefs = mergeTypeDefs(typesArray);
const resolvers = mergeResolvers(resolverArray);

// console.log({typeDefs, resolvers})

export {
    typeDefs,
    resolvers
}