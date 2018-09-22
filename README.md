<img src="./brcnLogo.png" alt="Boulder React Coding Night logo" align="center" />

# Welcome to the Boulder React Coding Night!


## Start
* Fork this repo into your personal github account
* Clone from your repo onto your local machine
* `$ yarn install`

* `$ createdb react_twitter` (make sure you have postgres downloaded globally)
* `$ knex migrate:latest`
* `$ knex seed:run`
* `$ yarn run client`
* Open a new terminal tab, then `$ yarn run server`


## Sync With Master Repo
* git remote add upstream git@github.com:boulderReactCodingNight/03-react-twitter.git
* git fetch upstream
* git pull upstream master


## API Resources

* POST `/api/users/login` (handle, password)
* POST `/api/users/signup` (handle, email, name, password, avatar (optional))

* GET `/api/messages`

## Components


## User Stories
