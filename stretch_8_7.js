/* a company has users and projects
users are assigned projects through tasks
*/
const users = [
  { id: 1, name: 'moe'},
  { id: 2, name: 'larry'},
  { id: 3, name: 'curly'},
];
​
const projects = [
  { id: 5, name: 'build server'},
  { id: 6, name: 'new accounting app'},
  { id: 7, name: 'clean up css'},
];
​
const tasks = [
  { userId: 1, projectId: 5},
  { userId: 1, projectId: 7},
  { userId: 2, projectId: 7},
];
​
const processed = process();
console.log(JSON.stringify(processed, null, 2));
/*
[
  {
    "id": 1,
    "name": "moe",
    "tasks": [
      {
        "userId": 1,
        "projectId": 5,
        "project": {
          "id": 5,
          "name": "build server"
        }
      },
      {
        "userId": 1,
        "projectId": 7,
        "project": {
          "id": 7,
          "name": "clean up css"
        }
      }
    ]
  },
  {
    "id": 2,
    "name": "larry",
    "tasks": [
      {
        "userId": 2,
        "projectId": 7,
        "project": {
          "id": 7,
          "name": "clean up css"
        }
      }
    ]
  },
  {
    "id": 3,
    "name": "curly",
    "tasks": []
  }
]
*/
​
