import db from '../config.js';

const up = () => {
  db.connect();
  db
    .query(`
    CREATE TABLE tasks (
      id bigint PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
      name varchar(50),
      description varchar(255),
      expires timestamp,
      is_ready boolean DEFAULT 'false'
    )`)
    .then(() => {
      console.log('Migration was completed!');
      db.end();
    });
};

up();
