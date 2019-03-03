<img src="./brcnLogo.png" alt="Boulder React Coding Night logo" align="center" />

# Welcome to the Boulder React Coding Night!


## Start

* Fork this repo into your personal github account
* Clone from your repo onto your local machine
* Make sure you have yarn installed globally `npm install yarn -g`
* `$ yarn install`

* Make sure you have postgres installed globally, then from the base directory seed the databases:

Start postgres (on a mac)
```bash
yarn run start-postgres
```
(note: you can stop postgres on a mac with `yarn run stop-postgres`)

If this is the first time creating the databases use: 

```bash
$ yarn run seed
```

If you already have the databases created and want to re-migrate, use:

```bash
$ yarn run drop && yarn run seed
```

Warning! This will drop and recreate all your dev databases!

## To Run Locally
* `$ yarn run server`
* Open a new terminal tab, then `$ yarn run client`


## To Run All Tests
* `$ yarn test`

## Project Waffle Board for User Stories and Issues, but don't use it.
* https://waffle.io/boulderReactCodingNight/03-react-twitter

## Sync With Master Repo
* git remote add upstream https://github.com/boulderReactCodingNight/03-react-twitter.git
* git pull upstream master

## To Submit a Pull Request
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
    - Pull from upstream which should be boulderReactCodingNight/03-react-twitter
      - Confirm upstream with `git remote -v`
      - `git pull upstream master`
      - Handle any merge conflicts
    - Push all of your code up to the remote (`git push origin master`)
      - Make sure your origin is set to your fork (`git remote -v`)
  - Go to your fork on Gitub GUI (i.e., https://github.com/yourUserName/03-react-twitter)
  - Click Pull Requests on the top left of the window, then click New Pull Request (green button, top right)
  - Follow directions in the GUI
    - Base fork: boulderReactCodingNight/03-react-twitter
    - Head fork: userName/03-react-twitter (this should be the fork you were working on)
    - Specify a branch if you were working on a specific branch.
    - Click Create Pull Request


## API Resources

* POST `/api/users/login` (handle, password)
* POST `/api/users/signup` (handle, email, name, password, avatar (optional))

* GET `/api/messages`
* GET `/api/messages/user/:userId`
* POST `/api/messages` (text, userId)

* POST `/api/replies` (text, userId, messageId, replyId (optional))

## Screens / User Stories

### Nav
* User can click buttons for: Dashboard, Account, Logout

### Home '/'
* User can see a pretty landing page
* User can log in
* User can register for an account
* User get reset password by entering email
* After receiving reset email with secret code, user can click a link to go to reset password page

### Reset Password  '/reset-password'
* User can enter password and confirmPassword to update (if secret code verified)

### Dashboard '/dashboard'
* User can type 144 char text message
* User can click a button to submit message
* User can see message feed sorted by date descending
* User can increase a message's star_count by one
* User can click again to remove that star
* User can reply to a message (added to a single nested array of replies)
* User can see their avatar, name, handle (unique), message_count, star_count
* User can click on their own avatar/name/handle to navigate to their own profile page
* User can click another user's name/avatar/handle (in message) to navigate to that profile page

### Profile  '/profile/:userId'
* User can see all messages for a particular user sorted by date descending
* User can see avatar, name, handle (unique), message_count, star_count, bio, location, link, birth_date for owner of page

### Account  '/account'
* User can add or update their avatar (stored as base64 in db)
* User can update name, handle (unique), bio, location, link, birth_date
* User can update email
* User can update password

### Admin '/admin'
* User cannot access admin page
* Admin can update user info
* Admin can suspend/unsuspend users
