# CouchWorking - Project Overview

## Project Description

CouchWorking is the AirBNB for private Coworking spaces: are your tired of working home alone and have a spare desk in your flat? Share it on CouchWorking and meet like-minded people from around the world! If you'd like, you can even offer your guest a place to stay!

## Wireframes

[Wireframes](https://whimsical.com/couch-working-screens-nj7gdn2Q4GeqsWc5pMkVm)

## Technical architecture

[Frontend](https://whimsical.com/couchworking-components-hierarchy-XFVwRNckhByMcumR12Hh8g) and [Backend](https://whimsical.com/couch-working-5z7fpHtMBA94BiigcXNXBX)

## API

MongoDB with two collections:

1) User collection with the following schema:
- userName
- password
- firstName
- lastName
- email

2) CouchWorking collection with the following schema:
- title
- description
- location
- contactInfo
- imgUrl (optional)

## MVP/PostMVP

### MVP

- Landing page with general info
- User functionality: create user account and log in
- CouchWorking functionality: list all existing CouchWorking offers, detail page for each offer, create new offers and edit the offers posted by you

### PostMVP

- User section: view and edit user info
- Filter and sort CouchWorking offers
- Connect offers to user profiles (take over username and contact info/email address)

## Code management

In parallel to the main branch, we will have a dev branch as the default branch we will be working against. Every team member will have an individual dev-branch from which we will push to dev. Deployments will be done from the main branch.

## Project Schedule

| Day     | Deliverable                               | Status   |
| ------- | ----------------------------------------- | -------- |
| Feb 1 | Proposal Approval, project setup and MongoDB setup        |  WIP |
| Feb 2  | Backend functionality |  |
| Feb 3  | Creating React app, API calls, authentication and component functionality                          |  |
| Feb 4  | Component functionality & styling                       |  |
| Feb 7  | Wrapping up and deployment                |  |
| Feb 8  | Potentials bugs, post-mvp (?) and presentations                             |  |

## Timeframes

| Component                  | Priority | Estimated Time | Time Invested | Actual Time |
| -------------------------- | :------: | :------------: | :-----------: | :---------: |
| Proposal                   |    H     |      tbd      |     tbd      |    tbd     |
| Github setup             |    H     |     tbd      |      tbd      |     tbd     |
| MongoDB setup |    H     |      tbd       |      tbd      |     tbd     |
| Create backend routes          |    H     |      tbd      |     tbd      |    tbd     |
| Create backend controllers          |    H     |      tbd      |     tbd      |    tbd     |
| Deploy backend       |    H     |      tbd      |     tbd      |    tbd     |
| Create React app      |    H     |      tbd      |     tbd      |    tbd     |
| CRUD requests / API calls    |    H     |      tbd      |     tbd      |    tbd     |
| Authentication    |    H     |      tbd      |     tbd      |    tbd     |
| Build screens                    |    H     |      tbd      |     tbd      |    tbd     |
| Styling             |    H     |      tbd      |     tbd      |    tbd     |
| Deploying frontend           |    H     |      tbd      |     tbd      |    tbd     |
| Bugfixes           |    H     |      tbd      |     tbd      |    tbd     |
| Total                      |    H     |    tbd     |     tbd     |    tbd    |
