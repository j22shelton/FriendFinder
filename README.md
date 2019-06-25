# FriendFinder:

Friend finder is similar to a dating app. This full-stack site will take in results from your users' survey of 10 questions, then compare their answers with those from other users. The user responds to each question with a ranking of 1-5, from strongly disagree to strong agree. Then the app calculates the best match based on the absolute difference for all combined questions, and displays the name and picture of the user with the best overall match.

## Code Explanation
- Express is used to run the server.
- The HTML in the "public" folder makes up the front-end portion of the code which make up what the user views.
- The files in the "routing" folder determine the back-end logic. The API routes send back existing content in the server-side data.
- The match is determined by calculating the friend with the minimal difference in scores and then sending that friend to the browser as a JSON object.

## Technologies Used:

 Express.js, node.js, HTML, CSS, Bootstrap, Javascript, and jQuery.

  ### Deployment
  - Heroku

## Contributor:

 - [Jocelyn Shelton](https://github.com/j22shelton)


## Live Preview:

 - [Friend Finder](https://protected-sea-80577.herokuapp.com)

 ![](/app/public/images/survey.png?raw=true)

 ![](/app/public/images/results.png?raw=true)