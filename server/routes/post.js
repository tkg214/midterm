"use strict";

const postRoute  = require('express').Router();

// TODO could merge userRoute and postRoute
// BASIC FRAMEWORK FOR ROUTE *** MAKE SURE TO INCREMENTALLY TEST
module.exports = function(fn) {
  function forNewPost(postID) {
    fn.getPost(postID, (post)=> {
      fn.findUserById(post[0].user_id, (handle) => {
        post[0].handle = handle[0].handle;
        console.log(post[0])
        return post[0];
      });
    });
  }

  // TODO include tags and comments array -- NEEDS TO BE REFACTORED
  postRoute.get('/', (req, res) => {
    let postID = req.query.postid;
    fn.getPostDataNew(postID, (data) => {
      let postData = data.rows[0];
      if (postData.likes === true) {
        fn.getLikes(postID, (likes) => {
          postData.likes = likes;
          if (postData.rating === true) {
            fn.getRating(postID, (rating) => {
              postData.rating = rating;
              fn.getComments(postID, (comments) => {
                if (comments.rows.length > 0) {
                  postData.comments = comments.rows;
                  res.send(postData);
                  return;
                } else {
                  res.send(forNewPost(postID));
                  return;
                }
              });
            });
          } else {
            postData.rating = 0;
            fn.getComments(postID, (comments) => {
              if (comments.rows.length > 0) {
                postData.comments = comments.rows;
                res.send(postData);
                return;
              } else {
                res.send(forNewPost(postID));
                return;
              }
            });
          }
        });
      } else {
        postDate.likes = 0;
        if (postData.rating === true) {
          fn.getRating(postID, (rating) => {
            postData.rating = rating;
            fn.getComments(postID, (comments) => {
              if (comments.rows.length > 0) {
                postData.comments = comments.rows;
                res.send(postData);
                return;
              } else {
                res.send(forNewPost(postID));
                return;
              }
            });
          });
        } else {
          postData.rating = 0;
          fn.getComments(postID, (comments) => {
            if (comments.rows.length > 0) {
              postData.comments = comments.rows;
              res.send(postData);
              return;
            } else {
              res.send(forNewPost(postID));
              return;
            }
          });
        }
      }
      // fn.getComments(postID, (comments) => {
      //   if (comments.rows.length > 0) {
      //     postData.comments = comments.rows;
      //     res.send(postData);
      //     return;
      //   } else {
      //     res.send(forNewPost(postID));
      //     return;
      //   }
      // });
    });
  });

  postRoute.post('/', (req, res) => {
    if(req.session.userID){
      let user_id = req.session.userID[0].id;
      // TODO: clear URL's from #, messes with AJAX
      let url = req.body.url;
      let title = req.body.title;
      let content = req.body.content;
      let tag = req.body.tag;

      fn.checkDupedURL(req.body.url, (result) => {
        if (result[0]) {
          res.send(result[0]);
          return;
        } else {
          fn.createPost({
            user_id: user_id,
            url: url,
            title: title,
            content: content,
            tag: tag
          }, (result) => {
            let postId = result.rows[0].id;
            fn.finishCreatePost(postId, tag, user_id, () => {
              res.status(201).send();
              return;
            });
          });
        }
      });

    } else {
      // TODO SPA so this is not necessary
      res.redirect('/login');
      return;
    }

  });

  return postRoute;

};
