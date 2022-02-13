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

This project is a frontend for an article server. 

# Development
The project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.2.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Compile and run the code

 - download and install, the latest Node.js. https://nodejs.org/en/download/
 - run `npm i` to install the related libaries and dependencies.
 - run `npm start` or `ng serve` to start the application in development mode.
 - run `ng serve --prod' to start in production mode (currently no diference between the two modes)

## Running unit tests

Run `ng test` to execute the unit tests.
