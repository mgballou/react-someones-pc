# Someone's PC - React Front End


## Project Description

> Someone's PC is a team-building tool for competitive Pokemon players. The application provides a reference and resource that streamlines planning teams & strategies outside of in-game play. The end user has the ability to create instances of Pokemon, organize them into game-legal teams, and adjust the stats, abilities*, and held items* of each Pokemon. 

> This project is a full stack MERN application. The API and database integration code can be found [here](https://github.com/mgballou/api-someonespc)

> I personally rebuilt & expanded this project from the original. The original Someone's PC was a group project developed with Anthony Blalock & Ciaran Kearney. Special thanks to them for all of their collaboration and contributions! Someone's PC (original) can be found [here](#https://github.com/mgballou/Someones-PC).


## Table of Contents

- [Project Title](#project-title)
- [Project Description](#project-description)
- [Installation](#installation)
- [Screenshots](#screenshots)
- [Features](#features)
- [Technologies](#technologies)

## Installation

> After cloning this repo and the [back end repo](https://github.com/mgballou/api-someonespc) to your local machine, you'll need to install dependencies with `npm i`. You'll need to set up the following in a .env.local file to connect with the back end.


```
VITE_AUTH_URL=http://localhost:[PORT]/auth

VITE_POKEMON_URL=http://localhost:[PORT]/pokemon

VITE_TEAMS_URL=http://localhost:[PORT]/teams

```

> Then, run the server with `npm run dev'. The back end repo will need to be running as well, and instructions can be found in that README.

## Screenshots



## Features

### Current

> * Create accounts and log in (JWT authorization)
> * Create any Pokemon up to #1008 and add it to your box
> * Adjust the stats of each Pokemon
> * Create Teams, and drag-and-drop your Pokemon into them
> * View the details of your created Pokemon and Teams
> * Random chance to receive a shiny Pokemon sprite upon creation

### Future
> * Adjust the abilities and held items of each Pokemon
> * Error display for misspelled Pokemon names
> * Animated sprites where available

## Technologies

> * JavaScript
> * Vite
> * React
> * [React Beautiful DnD](#https://github.com/atlassian/react-beautiful-dnd)
> * CSS