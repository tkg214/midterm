'use strict';

// Basic express setup:

const PORT          = 8080;
const express       = require('express');
const bodyParser    = require('body-parser');
const app           = express();
const compass       = require('compass');
const cookieParser  = require('cookie-parser');
const bcrypt        = require('bcrypt');

app.use(compass());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// imports helper functions for database
const fn = require('./lib/functions.js');

// TODO include app.use(user(fn)) to check authentication (use middleware and next())
// User specific features should only be accessible by unique user

// imports routes that require database functions
const allPostsRoute = require('./routes/allposts')(fn);
const registerRoute = require('./routes/register')(fn);
const loginRoute = require('./routes/login')(fn);
const postRoute = require('./routes/post')(fn);
const userRoute = require('./routes/user')(fn);

app.use('/allposts', allPostsRoute);
app.use('/register', registerRoute);
app.use('/login', loginRoute);
app.use('/post', postRoute);
app.use('/user', userRoute);

// TODO implement logout route, likes route, comments route, search route (querying)

app.listen(PORT, () => {
  console.log('Example app listening on port ' + PORT);
});
