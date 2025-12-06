import config from '../config/index.js';
const { dbConfig } = config;

import knex from 'knex';

export const db = knex(dbConfig);

export default db;