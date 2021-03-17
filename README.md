# Battleships
This project is a basic Angular 2 example application based on the famous game Battleships. It was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.2. and [Angular Material](https://material.angular.io/).

## [Demo](http://ng-battleships.gearhostpreview.com/angular/)


## Game
### Make it run
- clone the repo and install npm packages
- build the project and serve on development server

### Game Start

- When the browser opens, a new game starts automatically
- Start a new game by using the menu on the player's board
- All ships are placed automatically

### Play the Game 

Player clicks on the coordinates in the Opponent's board to fire at the enemy. After that, the opponent strikes back. Hits and misses are marked by a "x" on the coordinate (miss = white, hit red)
- Player wins, when all Opponent's ships are sunk
- Player looses, when his ships are sunk

### KI

Don't complain - there is no KI. The opponent just fires randomly at your coordinates. It's just a showcase game ;-)

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
