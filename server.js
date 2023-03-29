// const express = require('express');
// const MongoClient = require('mongodb').MongoClient;

// const app = express();
// const port = process.env.PORT || 3000;

// const url = 'mongodb://localhost:27017';
// const dbName = 'feedback';

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// app.post('/feedback', (req, res) => {
//   const client = new MongoClient(url, { useNewUrlParser: true });

//   client.connect((err) => {
//     if (err) throw err;

//     const db = client.db(dbName);
//     const collection = db.collection('feedback');

//     const feedback = {
//       name: req.body.name,
//       email: req.body.email,
//       message: req.body.message
//     };

//     collection.insertOne(feedback, (err, result) => {
//       if (err) throw err;

//       console.log(`Feedback stored with ID: ${result.insertedId}`);

//       res.status(200).send('Feedback stored successfully.');
//     });

//     client.close();
//   });
// });

// app.listen(port, () => {
//   console.log(`Server listening on port ${port}.`);
// });


const express = require('express');
const { Pool } = require('pg');

const app = express();
const port = process.env.PORT || 3000;

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post('/feedback', (req, res) => {
  const feedback = {
    name: req.body.name,
    email: req.body.email,
    message: req.body.message
  };

  pool.query('INSERT INTO feedback (name, email, message) VALUES ($1, $2, $3)', [feedback.name, feedback.email, feedback.message], (err, result) => {
    if (err) throw err;

    console.log(`Feedback stored with ID: ${result.insertId}`);

    res.status(200).send('Feedback stored successfully.');
  });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}.`);
});

