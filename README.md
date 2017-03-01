# Midterm Project

Project #5: Resource Wall
Pinterest for learners.

Allow learners to save learning resources like tutorials, blogs and videos in a central place that is publicly available to any user.

## Requirements:

users should be able to save an external URL along with a title and description
users should be able to search for already-saved resources created by any user
users should be able to categorize any resource under a topic
users should be able to comment on any resource
users should be able to rate any resource
users should be able to like any resource
users should be able to view all their own and all liked resources on one page ("My resources")
users should be able to register, log in, log out and update their profile

Extensions:

Instead of categorizing the resources manually, the service will scan the contents of the resource and try to categorize it automatically. It can also use this information to set the title and description automatically. In this scenario, the user has to only add the URL.
When creating a resource, if it finds the same URL already in the database (by another user), allow them to simply like theirs instead.
Ability to follow certain users.
Users receive an email if their resource receives a like or comment.
Users receive an email if they are followed.
Facebook-like timeline of resources based on your own activity as well as activity from users that you are following.

## Technical Approach & Objectives

The server is built with Node and Express and allows users to request and submit URL's via a JSON end-point.

