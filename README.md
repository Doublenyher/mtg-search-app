# Magic: The Gathering Trading Card Search App

## Introduction
This project originally completed development on March 24, 2019.
It is an app that runs on the CLI which allows the user to enter a keyword to search for a Magic: The Gathering trading card and displays a list of at least 100 Magic: The Gathering cards that match the keyword. Then the user can choose one of the cards displayed to view more detailed information about the card.

## Requirements
+ JavaScript
+ Node.js
+ Vue.js

## Installation
+ Clone this repository using `git clone <repo-url>`
+ Switch to the `magicthegathering` directory.
+ Run `npm install` to download the dependencies.
+ Switch to the `mtg-app` directory.
+ Run `npm install` to download the dependencies.

## Directions
1. Switch to the `mtg-app` directory.
2. Search by entering `node cli.js search --keyword <keyword>` or `node cli.js search --k <keyword>`.
3. Navigate through the list of cards displayed with the `Up` and `Down` arrow keys.
4. Press `Enter` to view more information about the card that is highlighted.
