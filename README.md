# parcel-v2-react-boilerplate

A boilerplate for project setup using Parcel V2 + React + SASS + Jest + RTL + TypeScript

## This boilerplate includes

* Parcel V2
* Typescript
* React
* Jest / RTL
* ESLint
* SASS

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

### Folder hierarchy and naming

* Naming convention for SCSS files - `ComponentName.module.scss`
* Naming convention for test files - `ComponentName.test.tsx`
* Components, their styling and test files should be in the same folder
* `<RootDirectory>/dist/_redirect` is made with netlify hosting in mind.

![Folder Hierarchy](https://user-images.githubusercontent.com/28874355/147749835-7bbd188d-f693-4a62-a80d-e94626cd994d.png)

### Styling

* SCSS preprocessor is preferred
* CSS modules are in use
* Scoped naming follows these rules: `[name]__[local]__[hash:base64:5]` and can be changed in `<RootDirectory>/.postcssrc`

#### Additional Installed packages

* Normalize CSS
* Sanitize CSS
* PostCSS (autoprefixer enabled)

### Testing

* React Testing Library is preferred
* User Events are preinstalled
* It is assumed that mocking is done through Mock Service Worker (preinstalled and configured)
* Mock files and handlers are in `<RootDirectory>/src/mocks/`
