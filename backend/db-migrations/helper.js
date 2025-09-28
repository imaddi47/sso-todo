import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// extract SQLs -> up and down SQLs
export const extractUpDownSQLs = (migrationName) => {
  // extract sql base name
  const migrationBaseName = path.basename(migrationName).split('.').slice(0, -1).join('.');

  // prepare sql filename including absolute path
  const _upSql = path.join(__dirname, 'sqls', `${migrationBaseName}-up.sql`);
  const _downSql = path.join(__dirname, 'sqls', `${migrationBaseName}-down.sql`);

  // extract content of the SQL files
  const _upSqlContent = fs.readFileSync(_upSql, 'utf8');
  const _downSqlContent = fs.readFileSync(_downSql, 'utf8');

  return {
    up: _upSqlContent,
    down: _downSqlContent
  }
}
