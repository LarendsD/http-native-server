import http from 'http';
import routes from './routes/routes.js';
import db from './db/config.js';
import validateBody from './validation/validation.js';

const server = http.createServer((request, response) => {
  response.setHeader('content-type', 'application/json');
  let body;
  let errs = [];
  request
    .on('data', (chunk) => {
      body = JSON.parse(chunk);
      errs = validateBody(body, request.method);
    })
    .on('end', () => {
      if (errs.length > 0) {
        response.writeHead(400);
        response.end(JSON.stringify(errs));
      } else {
        const { url, method } = request;
        const result = Object.keys(routes).find((path) => {
          const regexp = new RegExp(`^${path}$`);
          const matches = url.match(regexp);
          if (!matches || !routes[path][method]) {
            return false;
          }
          const id = matches[1];
          routes[path][method](request, response, db, body, id);
          return true;
        });

        if (!result) {
          const notFoundErr = {
            message: 'Not Found!',
          };
          response.writeHead(404);
          response.end(JSON.stringify(notFoundErr));
        }
      }
    });
});

const port = process.env.PORT || 3000;

server.listen(port, () => {
  db.connect();
  console.log(`Server started at ${port}`);
});
