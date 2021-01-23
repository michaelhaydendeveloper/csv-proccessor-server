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

db.documentDetail.drop();
db.documentDetail.insertMany([
  {
    name: 'Tensor',
    age: 6
  },
  {
    name: 'Flow',
    age: 10
  }
]);

db.documentRaw.drop();
db.documentRaw.insertMany([
  {
    name: 'Tensor',
    age: 6
  },
  {
    name: 'Flow',
    age: 10
  }
]);

db.documentProcessed.drop();
db.documentProcessed.insertMany([
  {
    name: 'Tensor',
    age: 6
  },
  {
    name: 'Flow',
    age: 10
  }
]);