# parcel-v2-react-boilerplate
A boilerplate for project setup using Parcel V2 + React + SASS + Jest + RTL + TypeScript

## This boilerplate includes
* Parcel V2
* Typescript
* React
* React Router DOM
* React Testing Library
* Jest
* ESLint
* Axios
* SASS
* Normalize CSS
* Sanitize CSS
* PostCSS (autoprefixer enabled)

*You will notice that it is quite an opinionated setup, so you might need to amend things for your personal project*

## Installation
* Git clone this repo
* From `<RootFoolder>` run `yarn install`
* If ESLint is throwing errors, should restart VSCode

## Commands
* `yarn start` - run a development server and watch changes
* `yarn build` - build project
* `yarn test` - run tests and watch all changes

## Opinionated approach
* CSS modules are in use
* Naming convention for SCSS files - `ComponentName.module.scss`
* Naming convention for test files - `ComponentName.test.tsx`
* Components, their styling and test files should be in the same folder
<img width="228" alt="image" src="https://user-images.githubusercontent.com/28874355/147749835-7bbd188d-f693-4a62-a80d-e94626cd994d.png">

* Scoped naming follows these rules: `[name]__[local]__[hash:base64:5]` and can be changed in `<RootDirectory>/.postcssrc`
* `<RootDirectory>/dist/_redirect` is made with netlify hosting in mind.
