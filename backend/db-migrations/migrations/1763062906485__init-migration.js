import { extractUpDownSQLs } from '../helper.js'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url);

const { up: _up, down: _down } = extractUpDownSQLs(__filename);

// Export migration for the execution
export const up = (knex) => {
  return knex.schema.raw(_up);
}
export const down = (knex) => {
  return knex.schema.raw(_down);
}