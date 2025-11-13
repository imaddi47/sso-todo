import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const migrationsDir = `${__dirname}/migrations`;
const sqlDir = `${__dirname}/sqls`;

// Create directories if they don't exist
if (!fs.existsSync(migrationsDir)){
    fs.mkdirSync(migrationsDir);
}

if (!fs.existsSync(sqlDir)){
    fs.mkdirSync(sqlDir);
}

// Prepare migration filename with timestamp
const prepareMigrationFileName = (migrationName) => {
  const currentTimestamp = (new Date()).getTime();
  return `${currentTimestamp}__${migrationName}`;
}

const main = () => {
  const migrationName = process.argv[2];

  if(!migrationName) {
    console.error("[Error] Please provide a migration name. Usage: npm run db:migration:make <migration_name>");
    process.exit(1);
  }

  const migrationFileName = prepareMigrationFileName(migrationName);
  console.log(`Migration file name: ${migrationFileName}`);
  // create migration file
  fs.copyFileSync(path.join(__dirname, "migrationTemplate.stub"), `${migrationsDir}/${migrationFileName}.js`);
  // create up and down SQL files
  fs.writeFileSync(`${sqlDir}/${migrationFileName}-up.sql`, "-- Write your UP SQL here\n");
  fs.writeFileSync(`${sqlDir}/${migrationFileName}-down.sql`, "-- Write your DOWN SQL here\n");
}

main();