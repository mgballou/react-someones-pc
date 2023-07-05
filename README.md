# Someone's PC - React Front End


## Project Description

> Someone's PC is a team-building tool for competitive Pokemon players. The application provides a reference and resource that streamlines planning teams & strategies outside of in-game play. The end user has the ability to create instances of Pokemon, organize them into game-legal teams, and adjust the stats, abilities*, and held items* of each Pokemon. 

> This project is a full stack MERN application. The API and database integration code can be found [here](https://github.com/mgballou/api-someonespc).

> I personally rebuilt & expanded this project from the original. The original Someone's PC was a group project developed with Anthony Blalock & Ciaran Kearney. Special thanks to them for all of their collaboration and contributions! The original Someone's PC can be found [here](https://github.com/mgballou/someones-pc).


## Table of Contents

- [Project Description](#project-description)
- [Usage](#usage)
- [Installation](#installation)
- [Screenshots](#screenshots)
- [Features](#features)
- [Technologies](#technologies)

## Usage

> Live demo is available at https://someones-pc.netlify.app/
>
> Create an account and log in, or use our guest account to explore features.
> 
> All the Pokémon you Create can be found in your Box. From there, click on a sprite to adjust that Pokémon’s stats. Once you’ve got a squad ready, Create a new Team and drop in who you’d like to carry in your party. Keep making changes, and make new Teams to plan out different strategies and combinations. Save your plans and refer back between in-game sessions.

## Installation

> After cloning this repo and the [back end repo](https://github.com/mgballou/api-someonespc) to your local machine, you'll need to install dependencies with `npm i`. You'll need to set up the following in a .env.local file to connect with the back end.


```
VITE_AUTH_URL=http://localhost:[PORT]/auth

VITE_POKEMON_URL=http://localhost:[PORT]/pokemon

VITE_TEAMS_URL=http://localhost:[PORT]/teams

```
> Then, run the application with `npm run dev`. The back end repo will need to be running as well, and instructions can be found in that README.

> Within src/Pages/Login/index.jsx, there is a hard-coded value for the guest user button. You'll need to adjust this to match a user set up in your own database. 

## Screenshots

<img width="512" alt="Screen Shot 2023-07-05 at 1 16 00 PM" src="https://github.com/mgballou/react-someones-pc/assets/125108218/32f98b1b-5cf1-4611-84bb-f3e3cee4f20f">

<img width="512" alt="Screen Shot 2023-07-05 at 1 16 25 PM" src="https://github.com/mgballou/react-someones-pc/assets/125108218/31475828-6adf-445e-b224-001bf8278b7e">

<img width="512" alt="Screen Shot 2023-07-05 at 1 17 09 PM" src="https://github.com/mgballou/react-someones-pc/assets/125108218/39f097f2-8cf6-4c47-9bce-708ccabfbce7">

<img width="512" alt="Screen Shot 2023-07-05 at 1 17 23 PM" src="https://github.com/mgballou/react-someones-pc/assets/125108218/78014ba6-6cfc-4227-9379-268e5794dab0">

<img width="269" alt="Screen Shot 2023-07-05 at 1 20 26 PM" src="https://github.com/mgballou/react-someones-pc/assets/125108218/1dfb109a-3d6f-4a93-b5d4-f2433b947dcd">

<img width="269" alt="Screen Shot 2023-07-05 at 1 20 40 PM" src="https://github.com/mgballou/react-someones-pc/assets/125108218/74c5612b-ecb3-4c7d-a598-5ed1c7e7d24e">

<img width="269" alt="Screen Shot 2023-07-05 at 1 21 25 PM" src="https://github.com/mgballou/react-someones-pc/assets/125108218/47820f30-4fd8-4d60-931f-b42f67ce1cc2">


## Features

### Current

> * Create accounts and log in (JWT auth)
> * Create any Pokemon up to #1008 and add it to your box
> * Adjust the stats of each Pokemon
> * Create Teams, and drag-and-drop your Pokemon into them
> * View the details of your created Pokemon and Teams
> * Random chance to receive a shiny Pokemon sprite upon creation

### Future
> * Adjust the abilities and held items of each Pokemon
> * Error display for misspelled Pokemon names
> * Animated sprites where available
> * Improve button styling

## Technologies

> * JavaScript
> * Vite
> * React
> * [React Beautiful DnD](#https://github.com/atlassian/react-beautiful-dnd)
> * CSS
