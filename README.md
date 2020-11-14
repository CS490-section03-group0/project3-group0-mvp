# Project3

* Heroku Link: http://tickets-and-games-mvp.herokuapp.com/
* To use this repository, please follow the following steps:

# Google OAuth Signup

1) Sign up https://console.developers.google.com/
2) Click create project
3) Click new project
4) Name the project whatever you would like
5) Choose "no organization"
6) Click credentials
7) Click create credentials
8) Click OAuth client ID
9) Click Configure consent screen
10) Choose external
11) For the application name secify something similar to the project name, click save
12) Back to credentials, create credentials, OAuth Client ID, click web application 


1) Run python -m flask db upgrade
2) Run python app.py
3) On a new terminal run npm run start

## Installation 

1) git clone https://github.com/CS490-section03-group0/project3
2) npm install
3) Install heroku by running npm install -g heroku
4) npm install react-google-login

## Heroku Signup and Create

1) Sign up for heroku at heroku.com
2) on the terminal enter heroku login -i
4) heroku create
5) Navigate to your newly-created heroku site
6) Click configure Add-ons
7) Search Heroku Postgres and add it
8) Click on Heroku Postgres 
9) Click settings 
10) View Credentials
11) Copy the URI link
12) navigate to the .env file
13) Paste the URI link 

## Running the Program

1) Run python -m flask db upgrade
2) Run python app.py
3) On a new terminal run npm run start

## Deploying to Heroku

1) git push heroku master
2) Navigate to the link and view your site

## Work Breakdown for Milestone 1 

* Samir Peshori 
  * Responsible for creating front/backend & unit tests for Leaderboard & Coinflip Game
  * Added Material UI to components to style
* Mohammad Khan 
  * Google OAuth
  * Cirle Ci, Heroku, README
* David Kim
  * Set up the python and react project and maintained it
  * Set up the server sided OAuth to let users log in
  * Fixed various issues as they came up (Bug with leaderboard, default state of profile view, etc)
* Allen Kung
  * Set up tables for postgresql database
  * Profile view, transaction history
  * Sign up, login through username/password, hash and salt passwords
  * Unfinished work:
    - Testing sign up
    - Testing login through username/password
