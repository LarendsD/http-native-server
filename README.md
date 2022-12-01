# http-native-server
## API, which constucted on native instruments and pg client(PostGreSQL)

# Available <a href="https://http-native-server-production.up.railway.app/">here</a>

## Routes:
### Get all tasks from database:
```bash
GET /tasks
```

### Get current task by id:
```bash
GET /tasks/:id
```

### Create your task:
```bash
POST /data
```
Example of the body:
```bash
{
  "name": "my task",
  "description": "my task description",
  "expires": "2022-05-21"
}
```

### Change your task:
```bash
PUT /data/:id
```
Example of the body:
```bash
{
  "name": "my redacted task",
  "description": "my redacted task description",
  "isReady": "true",
  "expires": "2022-05-30",
}
```

### Delete your task:
```bash
DELETE /data/:id
```

### In expires field supported
#### Date formats:
1. YYYY-MM-DD
2. Month day, YYYY
3. M/D/YYYY
4. MM/DD/YY
5. YYYY-MMM-DD
6. MMM-DD-YYYY
7. DD-MMM-YYYY
8. DD-MMM-YY
9. MMM-DD-YY

#### Time formats:
1. HH:MM:SS
2. HH:MM
3. HH:MM AM
4. HH:MM PM

## Local deploy:
1. Clone this repo:
```bash
git clone https://github.com/LarendsD/http-native-server
```
2. Go to local dir:
```bash
cd http-native-server
```
3. Setup application:
```bash
make setup
```
4. Start application:
```bash
make start
```

## Other usefull commands:
### Migrate DB:
```bash
make db-migrate
```

### Drop DB:
```bash
make db-drop
```