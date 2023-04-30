# RunningTracks
## Description

This is a full-stack application with the MVC model where Handlebars is used for the view, MySQL is used for the model with Sequelize as the ORM and Express is used as the controller for routing all the CRUD operations. The app takes in data input from users who are fitness runners and displays their data in bar charts. Users who post their runs can have other users comment on the runs.

## Table of Contents

- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [Screenshot](#screenshot)
- [Walkthrough Video](#walkthrough-video)
- [Credits](#credits)
- [Heroku deploy](#Deployment)
- [License](#License)

# User Story

```md
AS A Running lover
I WANT to track my running data easily and conveniently and share it with other users.
I want my data presented in an interesting way along with other relevant statistics.
I want to see the data of other users using the application.

```

## Acceptance Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I log in to the application
THEN I am redirected to my profile page
WHEN I I make a post
THEN I am prompted to input my distance and duration
WHEN I post my run
THEN The run is automatically posted on my feed along with relevant statistics, such as min/km, total running time and total distance for a given period of time (week, month, year).
WHEN I want to amend information about my runs
THEN I am able to update the time and distance about previous runs
WHEN I want to remove a post
THEN I am able to delete it
WHEN I want to view comments
THEN I am able to do that
WHEN I logout
THEN I am able to logout and send back to the login page
WHEN I want to view a chart of my runs for a period time
THEN I am represented a chart
```

## Screenshot
This is a screenshot of the generated HTML webpage.

![RunningTracks application homepage](./assets/images/RunningTracks%20app%20screenshot.png)

## Credits
- Bootstrap: https://getbootstrap.com/
- NodeJS: https://nodejs.org/en/
- MySql2:https://www.npmjs.com/package/mysql2
- Charts.js: https://www.npmjs.com/package/chart.js
- Bcrypt: https://www.npmjs.com/package/bcrypt
- Sequelize: https://www.npmjs.com/package/sequelize
- Express.js: https://www.npmjs.com/package/express
- Express-handlebars: https://www.npmjs.com/package/express-handlebars
- Express-session: https://www.npmjs.com/package/express-session
- dotenv: https://www.npmjs.com/package/dotenv
- connect-session-sequelize: https://www.npmjs.com/package/connect-session-sequelize
 

## Deployment
This app is no longer hosted on Heroku.

## License

This project is using MIT license.

Copy right @ 2022 Xuan Huy Bui - r134x7 - Nicols - Vicky
