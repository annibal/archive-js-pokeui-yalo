Live at https://annibal.github.io/pokeui-yalo/#/

## What
Interface that shows pokemons, allows to favorite some

## How
Made with React;

Libs highlight:
* React Router
* Axios

## Why
For interviewers to believe that i know React

---

## Getting Started
* Ensure you have internet access, npm and node installed;
* Clone the repo: `git clone git@github.com:annibal/pokeui-yalo.git` or any other way you prefer;
* Inside the cloned folder, run `npm install`, then `npm start`

This project was created with [Create React App](https://github.com/facebook/create-react-app).

## Publishing
* Run `npm deploy`. This updates the [gh-pages](https://www.npmjs.com/package/gh-pages) from github, thus updating the live link.

### Trivia
I didn't used Redux, i didn't felt it was complex enought to require Redux.

Instead, on the provider, there is some memoization and reducer logic.

After building it, i do realize i could have left the pokemon card fetch any data he required, simplifying a lot everything.

It also requires some cache limiting logic, since LocalStorage is limited to 5MB.
