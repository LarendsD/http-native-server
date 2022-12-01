setup: install db-migrate

install:
	npm install

start:
	node src/index.js

db-migrate:
	node src/db/migrations/up.js

db-drop:
	node src/db/migrations/down.js