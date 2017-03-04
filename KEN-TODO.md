THURSDAY
===========================================================
* Create modals for login, register (depending on user login) [DONE]
* Create navbar dropdown menu items [DONE]
* Update button for My Resources button
* Create modal for new post (only when user is logged in) [DONE]
* Modify post thumbnail to include option to like and rate using jquery
* Create Likes, My Posts toggle buttons (show once My Resources is clicked)
* Fix grid layout system using Packery, Draggabilly, and Masonry (margins, padding, sizes)

* Edit Ajax request for NEW POST request => /post [DONE]
* Edit Ajax request for REGISTER request => /register [DONE]

* Create Ajax request for LIKE request => /like
* Create Ajax request for RATING request => /rating
* Create Ajax request for COMMENT request => /comment
* Create Ajax request for USER POSTS request => /user
* Create Ajax request for UPDATE POST request => /user
* Create Ajax request for DELETE POST => /user
* Create Ajax request for TAG request => /tag

FRIDAY
===========================================================
* Fix bug in new post modal to hide on submission
* Add buttons for likes and own posts at top
* Show likes, option to like, rating, option to rate, comment, option to comment in enlarged post
* Modify post thumbnail to include tags, likes, post age
* Take out description in thumbnail
* Modify id to make it value for postid
* Modify fetch posts function to order by date

* Fix first post alignment
* Fix post margins top and bottom

* Store post_id in data-attribute
* Update post thumbnail with likes, ratings, and comments
* Make modal to enlarge thumbnail
* Implement category selector
* No duplicate posts
* Must incorporate user authentication in middleware
* Must only be able to update, like, delete on own account

* morgan
* winston
* knexlogger

DATA ENDPOINTS NEEDED:

* USE postid and useridwhen possible

* All posts GET /allposts => RECEIVE JSON multiple instances=(url, title, handle, date created, description, likes, comments, tags) [DONE]

* Liking post POST /likes => RECEIVE JSON like count for post (like if not liked, delete if liked) must send a url to backend as query string and receive a response based on like history (send url in param), user_id in session [ERMIS]

* Commenting post POST /comments => SEND JSON=(url, comment) *** need to differentiate comment somehow [HANS]

* Rate post POST /rating => SEND JSON=(url, rating) send to backend a url and rating as query string, user_id in session [ERMIS]

* User's posts GET /user=> RECEIVE JSON multiple instances=url, title, handle, date created, description, likes, ratings, comments, tags) backend has user_id in session [DONE but needs edit]

* User's likes GET /userlikes => RECEIVE JSON multiple instances=(url, title, handle, date created, description, likes, ratings, comments, tags) backend has user_id in session [ERMIS]

* Specific post GET /post => RECEIVE JSON one instance=(url, title, handle, date created, description, likes, ratings, comments, tags) send url to backend as query string , user_id in session [KEN]

* User post POST /post => SEND JSON=(url, title, handle, date created, description, tags) user_id in session [DONE needs editing]

* See tags GET /tags => RECEIVE JSON multiple instances=(url, title, handle, date created, description, likes, ratings, comments, tags) tag in query string [HANS]



* Unrate post DELETE => SEND JSON=(url) send to backend a url as query string, user_id in session [ERMIS]

* New follow PUT => SEND JSON=(user) similar to likes, delete follow if following already

* Posts by user's follows GET => RECEIVE JSON multiple instances=(url, title, handle, date created, description, likes, ratings, comments, tags) user_id in session

* Strech: User's followers GET => RECEIVE JSON multiple instances=(users) user_id in session

* Stretch: Update post POST => SEND JSON=(url, title, handle, description, tag) user_id in session

* Stretch: Delete post POST => SEND JSON=(url) user_id in session

* Stretch: Update comment PUT => SEND JSON=(url, comment) ***

* Stretch: Delete comment DELETE => SEND JSON=(url, comment) *** -->

* Stretch: users who follow you GET => RECEIVE JSON multiple instances=(users) user_id in session
