# http-native-server
## API, which constucted on native instruments and pg client(PostGreSQL)

## Paths:
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
Example of the body:
{
  name: my task,
  description: my task description,
  isReady: false,
  expires: 21-05-2022,
}
```

### Change your task:
```bash
PUT /data/:id
Example of the body:
{
  name: my redacted task,
  description: my redacted task description,
  isReady: true,
  expires: 21-05-2022,
}
```

### Delete your task:
```bash
DELETE /data/:id
```