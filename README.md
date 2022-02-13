# TODO
 - unify data objects
 - unify error message
 - introduce user levels
 - introduce NgRx Store
 - user modification endpoint can modify the username/e-mail to an existing one without any error message and prevention. Currently client prevent this action without sending any username/email at modifitation time.
 - allow to modify password for user in the endpoint. Currently the exact string is written into the database. Server side does not encrypt it. In this case the login will be never success after the password modification 
 - create an endpoint whcih allow to get the articles by user
 - server should not allow to modify articles by other users
 - Articles endpoint should not send the "articlesCount", it can get from the article array easily. Article endpoint should send a simple article array
 - article cards have display issue in 850-1000px with resolution


# Articles

This project is a frontend for an article server. The software displays the articles of the users who were previously signed up to the system.
The registartion is easy free. Articles can be published right after the registration.

## Features

### Visitors
 - the web fronted lists the articles which are available on the server side. The main page shows them in cards which contqains the article picture (autogenerated from title), the description and the author name. 
 - use mouse over on the name of the author, to get more details about him/her
 - the chosen article can be opened in with the button of the card. In this case the whole article displayed with the autogenerated picture and the tags as well.
 - articles are readononly for visitors, non-registered users and not logged in users
 
 
### Registered authors
 - user registration with giving just a few data: username, e-mail address and password. Usernames and e-mail addresses are unique in the system, users cannot have a double registration for same username and e-mail address
 - users can edit their own profile after the successful login. They cannot modify the registered username and e-mail address, however they can have additional data like biography and profile picture. Profile picture should be hosted on an external server, system stores the picture URL only.
 - users can create and edit their articles under the `Articles` menu. They can define the title, description and the body of the article. Article picture is autogenerated from the first word of the title and modification date is stored at saving time.
 - to make the website and the article SEO friendly, tags can be defined for articles on the same form where the article can be edited. Currently, the number of the tags is 5 for each article.

### User administration
 - user administration is also available for signed up users.
 - users can delete other users from the system. Be aware if a user has been deleted then all user related articles will be deleted as well.
 - user administration is still rudimental, please read the feature ideas in the TODO section 



After a successful build you can reach the application in your favorite browser on this URL: `http://localhost:4200/`
See below how to start the application. 

# Development
The project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.2.2.

## Compile and run the code

 - download and install, the latest Node.js. https://nodejs.org/en/download/
 - run `npm i` to install the related libaries and dependencies.
 - run `npm start` or `ng serve` to start the application in development mode.
 - run `ng serve --prod' to start in production mode (currently no diference between the two modes)

The web interface of the application is reachable on this URL: `http://localhost:4200/`

## Running unit tests

Run `ng test` to execute the unit tests.
