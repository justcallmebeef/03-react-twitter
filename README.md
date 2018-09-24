<img src="./brcnLogo.png" alt="Boulder React Coding Night logo" align="center" />

# Welcome to the Boulder React Coding Night!


## Start
* Fork this repo into your personal github account
* Clone from your repo onto your local machine
* `$ yarn install`

* Make sure you have postgres installed globally, then:
```bash
$ createdb react_twitter_dev
$ createdb react_twitter_test
$ cd server
$ knex migrate:latest
$ knex migrate:latest --env test
$ knex seed:run
$ knex seed:run --env test
$ cd ../
```
* `$ yarn run client`
* Open a new terminal tab, then `$ yarn run server`
* To run all tests: `$ yarn test`


## Sync With Master Repo
* git remote add upstream https://github.com/boulderReactCodingNight/03-react-twitter.git
* git pull upstream master

## Pull Request
### Once you have completed your issue:
* Questions to Ask Yourself:
  - Do all tests still pass? (`yarn test`)
  - Did I increase techical debt?
  - Can I write tests to cover my code?
  - Am I following the repos general code style?
* Submit PR:
  - Commit and push all of your code
    - If you haven't been commiting as you go:
      - `git add <files>`
      - `git commit -m "commit message here, closes #issueNumber"`
      - Please make sure to add the issue number that you completed in one of your commit messages (i.e., closes #17)
    - Pull from upstream master which should be boulderReactCodingNight/03-react-twitter
      - Confirm upstream master with `git remote -v`
      - `git pull upstream master`
    - Push all of your code up to the remote (`git push origin master`)
      - make sure your origin push is set to your fork (`git remote -v`)
  - Go to your fork on Gitub GUI (i.e., https://github.com/yourUserName/03-react-twitter)
  - Click Pull Requests on the top left of the window, then click New Pull Request (green button, top right)
  - Follow directions in the GUI
    - base fork: boulderReactCodingNight/03-react-twitter
    - head fork: userName/03-react-twitter (this should be the fork you were working on)
    - Specify a branch if you were working on a specific branch.
    - Click Create Pull Request


## API Resources

* POST `/api/users/login` (handle, password)
* POST `/api/users/signup` (handle, email, name, password, avatar (optional))

* GET `/api/messages`

## Components


## User Stories
