const express = require('express');
const morgan = require('morgan');

const userRouter = require('./routes/userRoutes');
const tourRouter = require('./routes/tourRoutes');

const app = express();

///////////////////////////////////////////////////////////////////////////////////////////////////
// MIDDELEWARE
// middleware - this is used between the request and the response
///////////////////////////////////////////////////////////////////////////////////////////////////

app.use(morgan('dev'));

app.use(express.json());

app.use((req, res, next) => {
  console.log('Hello from the middleware! 👋');
  next();
});

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

// const users = JSON.parse(
//   fs.readFileSync(`${__dirname}/dev-data/data/users.json`)
// );

// app.get('/api/v1/tours', getAllTours);
// app.get('/api/v1/tours/:id', getTour);
// app.post('/api/v1/tours', createTour);
// app.patch('/api/v1/tours/:id', updateTour);
// app.delete('/api/v1/tours/:id', deleteTour);

///////////////////////////////////////////////////////////////////////////////////////////////////
// ROUTES - this is where we 'mount' our routers
///////////////////////////////////////////////////////////////////////////////////////////////////

//this is 'mounting' a router on a route
app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

///////////////////////////////////////////////////////////////////////////////////////////////////
// SERVER
///////////////////////////////////////////////////////////////////////////////////////////////////

const port = 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
