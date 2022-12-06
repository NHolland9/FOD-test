# StarCart

The idea is that a user create a collection of their favourite star wars related stuff: films, people, planets, vehicles, starships. At the
moment, the default is to fetch films. you can toggle results, but there's no results yet for characters ( or any of the others ), so some
ideas for improvments could be ( getting progressively harder):

## extend current functionality

1 wire up the endpoint to display the results for characters just like the films components work. ( ie copy/paste )

2 we need pagination also for the results - luckily the json provides a next and previous and a total count of items

## favourites UI

    -- there's a faves component but all we can do is add, we can't delete or sort by rating.

3 update the removeFave function <code> /features/faves/favesSlice.reducer.removeFave </code> to find and remove the selected favourite from
the state faves array

4 It's possible to add the same fave twice, extend the existing addFave function to make sure we're not adding the same fave again

## typescript and testing

5 change the FaveItemProps interface in the FavesItem component from any so that it satisfies the typescript compiler

remove the 'any' and add the correct type interface Props{
	 fave:any;
	 handleRating:any;
	 handleRemove:any;
 }



6 update the unit test to test the input/output of the FaveItem

## redux

7 create a new slice of state for a future shopping cart we're going to add later with addCartItem, removeCartItem and editCartItem methods
and make sure that each item when added has a unique id

## ... for funzies ...

8 add filters eg type / 1-star 2-star 3-star

9 add new RTKQuery API end points for `vehicles` and `planets` to services https://swapi.dev/documentation

10 Time left? add some flair, a 'show off' feature 

# TECH STACK / GETTING STARTED

## install vscode git with git bash for windows ( if windows ) / bash

## install nvm and or node to get the latest version of nodejs 'lts' version

```bash
nvm install lts
nvm use 16.14.0
npm install -g npm@8.5.4
```

## fork repo https://github.com/sjingoFOD/starcart

## install the packages and dependencies and start the app

```bash
npm ci
npm start
```

\*\*\* sometimes npm can be buggy, if you need to reinstall packages to clear any errors, then try the following command :

```bash
rm -rf node_modules

npm cii
npm start
```

## If for some reason you can’t get the app to spin up then just have a go using ‘ npx create-react-app’ at hitting some of the endpoints, mapping the data and displaying the results as best you can.

# And rather than struggle with something, just email ***UPDATE ME*** and I’ll get back to you.

    -- You are advised to have VS Code, Redux dev tools, Eslint, Prettier, VS Code Chrome Debugger Extensions installed
    -- useful links

https://reactjs.org/

https://redux-toolkit.js.org/introduction/getting-started

https://github.com/coreybutler/nvm-windows/releases

https://dev.to/skaytech/how-to-install-node-version-manager-nvm-for-windows-10-4nbi

https://create-react-app.dev/docs/getting-started/

https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en

https://gitforwindows.org/

https://daveceddia.com/redux-tutorial/

https://www.youtube.com/watch?v=9zySeP5vH9c&t=1513s

https://react.semantic-ui.com/
