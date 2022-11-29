import db from '../config.js';

const down = () => {
  db.connect();
  db
    .query(`
    DROP TABLE tasks
    `)
    .then(() => {
      console.log('Drop was completed!!');
      db.end();
    });
};

down();
