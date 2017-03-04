'use strict';

// Basic express setup:

const PORT          = 8080;
const express       = require('express');
const bodyParser    = require('body-parser');
const app           = express();
const compass       = require('compass');
const cookieSession  = require('cookie-session');

app.use(compass());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Use for front-end
const cookieParser = require('cookie-parser')
app.use(cookieParser());

app.use(cookieSession({
  name: 'session',
  keys: ["eec666442edbb434c822db6fdfe204d004c3d7b1"],
  maxAge: 246060100
}));

// imports helper functions for database
const fn = require('./lib/functions.js');

// TODO: include app.use(user(fn)) to check authentication (use middleware and next())
// User specific features should only be accessible by unique user

// imports routes that require database functions
const allPostsRoute = require('./routes/allposts')(fn);
const registerRoute = require('./routes/register')(fn);
const loginRoute = require('./routes/login')(fn);
const postRoute = require('./routes/post')(fn);
const userRoute = require('./routes/user')(fn);
const likesRoute = require('./routes/likes')(fn);
const commentsRoute = require('./routes/comments')(fn);
const ratingRoute = require('./routes/rating')(fn);
const profileRoute = require('./routes/profile')(fn);
const searchRoute = require('./routes/search')(fn);
const userOwnLikesRoute = require('./routes/userownlikes')(fn);

app.use('/allposts', allPostsRoute);
app.use('/register', registerRoute);
app.use('/login', loginRoute);
app.use('/post', postRoute);
app.use('/user', userRoute);
app.use('/likes', likesRoute);
app.use('/comments', commentsRoute);
app.use('/rating', ratingRoute);
app.use('/profile', profileRoute);
app.use('/search', searchRoute);
app.use('/userownlikes', userOwnLikesRoute);

app.post("/logout", (req, res) => {
  req.session = null;
  res.clearCookie('loggedin');
  res.redirect('/');
});


// TODO: implement logout route, likes route, comments route, search route (querying)

app.listen(PORT, () => {
  console.log('Example app listening on port ' + PORT);
});
