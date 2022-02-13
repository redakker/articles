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

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.2.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
