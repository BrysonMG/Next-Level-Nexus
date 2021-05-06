# Next Level Nexus

## Introduction

Hello, I am Bryson Goins and this is my front-end capstone project for Nashville Software School. This is an application designed for video game enthusiasts to digitally keep track of their game collections, review games, connect with other gamers, and schedule times to play with other users.

## How to View
1. Open your terminal/command line and type in `git clone https://github.com/BrysonMG/Next-Level-Nexus.git`
2. Type `cd Next-Level-Nexus/`
3. Type `npm start` and leave this window open and running.
4. Next, open another terminal and type `cd Next-Level-Nexus/src/API/`
5. Now type `json-server -p 8088 -w database.json` and leave this window open and running as well.
6. Finally, open your browser and go to `localhost:3000`. Step 3 should have automatically opened this page for you after it finished loading.

## Features

#### Home Page
- Gaming News section with links to articles.
- Section displaying newest additions to the database

#### Game Library
- Search by title
- Add games to personal collection
- Each game links to a details page about it.

#### My Stuff
- Display all games in personal collection
- Link to each game's details page
- Display all reviews left by the user
- Reviews link to the page of the game that was reviewed
- Display all groups the user has joined
- Link to each group's page

#### Groups
- Display all groups available to join
- Search by name or game
- Create new groups

#### Individual Pages - Games
- Display game details and description
- Add/Remove - personal collection
- Display all reviews
- Add, edit, or delete your own review

#### Individual Pages - Groups
- Display group logo, name, description, and game the group plays
- Join (not member), Leave (group member), or Disband the Group (group owner).
- Display all members
- Group owner can remove members, delete messages, and edit group description and logo
- Discussion board for group members
