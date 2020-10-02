![Banka Logo](https://i.ibb.co/bNckPNw/Screenshot-2019-08-27-at-00-18-00.png)
# banka-ui
> A Simple React app to consume the banka REST API

[![Build Status](https://travis-ci.com/chuxmykel/banka-ui.svg?branch=develop)](https://travis-ci.com/chuxmykel/banka-ui) [![Coverage Status](https://coveralls.io/repos/github/chuxmykel/banka-ui/badge.svg?branch=develop)](https://coveralls.io/github/chuxmykel/banka-ui?branch=develop) [![Maintainability](https://api.codeclimate.com/v1/badges/970c483b31f09591cd9b/maintainability)](https://codeclimate.com/github/chuxmykel/banka-ui/maintainability) [![Test Coverage](https://api.codeclimate.com/v1/badges/970c483b31f09591cd9b/test_coverage)](https://codeclimate.com/github/chuxmykel/banka-ui/test_coverage)

Banka is a light-weight core banking application that powers banking operations like account
creation, customer deposit and withdrawals. This app is meant to support a single bank, where
users can signup and create bank accounts online, but must visit the branch to withdraw or
deposit money. Banka is powered by the banka REST API and you can access the document by clicking this link. [https://a-bank.herokuapp.com/api/v1/docs](https://a-bank.herokuapp.com/api/v1/docs).

* [Technologies](#technologies)
* [Features](#features)
* [Getting Started](#getting-started)
  * [Installation](#installing)
  * [Developing](#developing)
  * [Licensing](#licensing)


### Pivotal Tracker
Pivotal Tracker was used in managing this project and you can find all the stories by clicking the link below
[https://www.pivotaltracker.com/n/projects/2354650](https://www.pivotaltracker.com/n/projects/2354650)

### UI
The UI is hosted at [https://react-banka.herokuapp.com/](https://react-banka.herokuapp.com/)

## Technologies
---
- [NodeJs](https://https://nodejs.org) - JavaScript runtime built on Chrome's V8 JavaScript engine
- [ReactJs](https://reactjs.org/) - A JavaScript library for building user interfaces
- [Redux](https://redux.js.org/) - A predictable state container for JavaScript apps.
- [Express](https://expressjs.com) - Fast, unopinionated, minimalist web framework for Node.js

### Supporting Packages
#### Linter
- [ESlint](https://eslint.org) - Linter Tool
#### Compiler
- [Babel](https://babeljs.io) - Compiler for Next Generation Javascript
- [WebPack](https://webpack.js.org/) - A static module bundler for modern JavaScript applications
#### Test Tools
- [jest](https://jestjs.io/) - A delightful JavaScript Testing Framework with a focus on simplicity
- [Chai](https://chaijs.com) - TDD/BDD Assertion Library
- [Enzyme](https://airbnb.io/enzyme/) - A JavaScript Testing utility for React.

## Features

* User (client) can sign up
* User can login
* User (client) can create an account
* Staff (cashier) can debit user (client) account
* Staff (cashier) can credit user (client) account
* Admin/staff can activate or deactivate an account
* Admin/staff can delete a specific user account
* Real time email notification upon credit/debit transaction on user account

## Getting Started
---
### Installing

To run this application, you need to have Node.js, and git(to clone the repo) installed. Then follow the instructions to get
it up and running

- clone the repo using 
```shell
$ git clone https://github.com/chuxmykel/banka-ui.git
```
- run ``` npm install --prod``` to install dependencies
- create a .env file from the .env.example file and fill in the necessary environment variables
- run ``` npm run build ``` to build the project and then run ``` npm start ``` to start the server
- now access the server on the localhost port 3000 (or whatever port you specified in your `.env` file) i.e ``` localhost:3000 or 127.0.0.1:3000 ```

Now the server will go live and listen for requests

## Developing

To develop the app further, a few handy tools have been put in place such as nodemon and some other dev dependencies.
Access them by starting the server using ```npm run dev```. But before using the command, make sure to follow the steps below

```shell
$ git clone https://github.com/chuxmykel/banka-ui.git
$ cd banka-ui/
$ npm install
$ npm run dev
```

### Building

The app is written in ES6+ and wired to run ES5 transpiled code in production. To transpile any changes to ES5 run the script shown below

```shell
$ npm run build
```

Babel then transpiles your ES6+ files to ES5 for environment compatibility

## Licensing

Copyright &copy; 2019, Ngwobia, Chukwudi M.
The code in this project is licensed under [ISC LICENSE](https://github.com/chuxmykel/banka-ui/blob/develop/LICENSE)
