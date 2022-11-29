export default {
  '/': {
    GET: (req, res) => {
      const response = {
        message: 'Welcome to http native server, please, read the instructions on out Github and send request to this server',
      };
      res.end(JSON.stringify(response));
    },
  },
  '/tasks': {
    GET: (req, res, db) => {
      db.query(
        `SELECT * FROM tasks`
      )
      .then((tasks) => {
        res.end(JSON.stringify(tasks.rows))
      })
    },
    POST: (req, res, db, body) => {
      db.query(
        `INSERT INTO tasks (name, description, expires, is_ready)
        VALUES ('${body.name}', '${body.description}', '${body.expires}', '${body.is_ready}') RETURNING *`
      )
      .then((newTask) => {
        res.end(JSON.stringify(newTask.rows[0]));
      })
    }
  },
  '/tasks/(\\d)': {
    GET: (req, res, db, body, id) => {
      db.query(
        `SELECT * FROM tasks WHERE id='${id}'`
      ).then((task) => {
        res.end(JSON.stringify(task.rows[0]))
      })
    },
    PUT: (req, res, db, body, id) => {
      db.query(
        `SELECT * FROM tasks WHERE id='${id}'`
      )
      .then((response) => {
        const task = response.rows[0]
        return {...task, ...body};
      })
      .then((updateBody) => {
        return db.query(
          `UPDATE tasks SET 
          name='${updateBody.name}', description='${updateBody.description}', expires='${updateBody.expires}', is_ready='${updateBody.is_ready}'
          WHERE id='${id}'
          RETURNING *`
        )
      })
      .then((updatedTask) => {
        res.end(JSON.stringify(updatedTask.rows[0]))
      });
    },
    DELETE: (req, res, db, body, id) => {
      let message;
      db.query(
        `DELETE FROM tasks WHERE id='${id}'`
      )
      .then(({ rowCount }) => {
        if (rowCount === 0) {
          message = { message: `Task ${id} was not found!`}
          res.writeHead(404);
        } else {
          message = { message: `Task ${id} was deleted successfully!` }
        }
        res.end(JSON.stringify(message));
      })
    }
  }
};
