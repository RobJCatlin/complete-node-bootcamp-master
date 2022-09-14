const fs = require('fs');

const express = require('express');
const app = express();

app.use(express.json());

// app.get('/', (req, res) => {
//   res
//     .status(200)
//     .json({ message: 'Hello from the server siiiiiidddeee', app: 'Natours' });
// });

// app.post('/', (req, res) => {
//   res.send('You can post to this endpoint');
// });

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
);

app.get('/api/v1/tours', (req, res) => {
  res.status(200).json({
    // Jsend Standard format
    status: 'success',
    // Shows number of results that are being sent
    results: tours.length,
    data: {
      // json file is called tours-simple.json, so is the route /tours
      tours: tours,
    },
  });
});

app.post('/api/v1/tours', (req, res) => {
  // console.log(req.body);
  res.send('Done!');
});

const port = 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
