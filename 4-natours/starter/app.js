const express = require('express');
const app = express();

// app.get('/', (req, res) => {
//   res
//     .status(200)
//     .json({ message: 'Hello from the server siiiiiidddeee', app: 'Natours' });
// });

// app.post('/', (req, res) => {
//   res.send('You can post to this endpoint');
// });

app.get('/api/v1/tours', (req, res) => {
  res.send('<h1>Hello, Route!</h1>');
});

const port = 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
