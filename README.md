<img src="./brcnLogo.png" alt="Boulder React Coding Night logo" align="center" />

# Welcome to the Boulder React Coding Night!


## Start

* Fork this repo into your personal github account
* Clone from your repo onto your local machine
* `yarn install`

## To Run Locally
* `yarn run server`
* Open a new terminal tab, then `yarn run client`


## Sync With Master Repo

* git remote add upstream git@github.com:boulderReactCodingNight/03-react-twitter.git
* git fetch upstream
* git pull upstream master


## API Resources

* GET `/api/helloworld`
* GET `/api/messages`


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
