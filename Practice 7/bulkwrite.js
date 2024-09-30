const MongoClient = require('mongodb').MongoClient;

// Connection URI
const uri = 'mongodb://localhost:27017';

// Database Name
const dbName = 'myDatabase';

// Create a new MongoClient
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// Use connect method to connect to the Server
client.connect(async function(err) {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected successfully to server');

  const db = client.db(dbName);
  const collection = db.collection('myCollection');

  // Create an array of operations to perform in bulk
  const bulkOps = [
    { insertOne: { "name": "John", "age": 30 } },
    { insertOne: { "name": "Jane", "age": 25 } },
    { updateOne: { filter: { "name": "John" }, update: { $set: { "age": 32 } } } },
    { deleteOne: { filter: { "name": "Jane" } } }
  ];

  try {
    // Execute the bulk operations
    const result = await collection.bulkWrite(bulkOps);
    console.log(result);
  } catch (err) {
    console.error('Error executing bulk write operations:', err);
  }

  // Close the client
  client.close();
});