# Réseau-NDA

This is an application using the components needed for a single-page application using MEAN stack. MEAN is a combination of MongoDB, ExpressJS, AngularJS and Node.js.
It provides a robust, flexible and scalable full-stack javascript solution.

## Development technologies

* [Node.js](https://nodejs.org/en/)
* [Angular5](https://angular.io/)
* [MongoDB](https://www.mongodb.com)
* [Express](https://expressjs.com/)
* [Git](https://git-scm.com/downloads)
* npm 3.x

## Installation

- Install all dependencies in package.json file. This can be done by navigating to the root directory in the command line interface and running the following command:
```
$ npm install
```
- Next, install all of the Angular development dependencies in package.json file:
```
$ cd frontend/
$ npm install
```
- Installation is complete. Navigate to the root directory and then:  

## Production
-- In root directory:
```
$ npm run build
$ npm start
```
-- Access production server at: http://localhost:8080

## Development
```
$ cd frontend/
$ ng serve
```
-- In another window, from root directory run:
```
$ nodemon
```
-- Access development server at: http://localhost:4200

-- Access API at: http://localhost:8080

## Usefull commands

* Start MongoDB: ./mongod.exe --dbpath "C:\MongoDB\data\db"
* Commit history: git log --oneline
* Delete a remote commit: git push origin +da1448e^:master
* Delete a local commit: git reset --soft HEAD~1
* More : https://gist.github.com/aquelito/8596717

## Contributors

Sébastien Septier & Vincent Reynaert.

## License

No license.