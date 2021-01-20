db.createUser({
  user: 'dev',
  pwd: 'password123',
  roles: [
    {
      role: 'readWrite',
      db: 'CsvProcessor'
    }
  ]
});

db.file.drop();
db.file.insertMany([
  {
    name: 'Tensor',
    age: 6
  },
  {
    name: 'Flow',
    age: 10
  }
]);

db.batch.drop();
db.batch.insertMany([
  {
    name: 'Tensor',
    age: 6
  },
  {
    name: 'Flow',
    age: 10
  }
]);