"use strict";

const postRoute  = require('express').Router();

// TODO could merge userRoute and postRoute
// BASIC FRAMEWORK FOR ROUTE *** MAKE SURE TO INCREMENTALLY TEST
module.exports = function(fn) {

  // TODO include tags and comments array -- NEEDS TO BE REFACTORED
  postRoute.get('/', (req, res) => {

    // New function to get all data of that post excluding comments

// if (true) {
//   let postID = req.query.postId;
//   fn.getPostRelatedData(postID, (data) => {
//     const postData = data.rows[0];
//     res.send(postData);
//
//     // Returns data like this:
//     // anonymous {
//     //   post_id: 2,
//     //   tag: 'Picture',
//     //   num_likes: '1',
//     //   avg_rating: '5.0000000000000000',
//     //   handle: 'dory' }
//   });
// }


    if (true) {
      let postID = req.query.postid;
      fn.getPost(postID, (post)=> {
        fn.findUserById(post[0].user_id, (handle) => {
          fn.getLikes(postID, (likes) => {
            // TODO rating not yet implimented due to bugs
            fn.getRating(postID, req.session.userID[0].id, (rating) => {
              fn.getComments(postID, (comments) => {
                post[0].likes = likes[0];
                post[0].handle = handle[0].handle;
                post[0].comments = comments;
                res.send(post);
              });
            });
          });
        });
      });
    }
  });

  postRoute.post('/', (req, res) => {
    if(req.session.userID){
      let user_id = req.session.userID[0].id;
      // TODO: clear URL's from #, messes with AJAX
      let url = req.body.url;
      let title = req.body.title;
      let content = req.body.content;
      let tag = req.body.tag;
      fn.createPost({
        user_id: user_id,
        url: url,
        title: title,
        content: content,
        tag: tag
      }, () => {
        res.status(201).send();
        return;
      });
    } else {
      // TODO SPA so this is not necessary
      res.redirect('/login');
      return;
    }

  });

  return postRoute;

};
