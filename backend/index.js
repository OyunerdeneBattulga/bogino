const express = require('express');
const connect = require('./db');
const cors = require('cors');
const dotenv = require('dotenv');

connect();

const usersRouter = require('./Route/userRouter');
const linksRouter = require('./Route/linkRoute');

// eslint-disable-next-line no-undef
const port = process.env.PORT || 8000;
const app = express();
connect();
dotenv.config();
const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,
    optionSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use('/', usersRouter);
app.use('/', linksRouter);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
