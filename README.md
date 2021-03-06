# Project Scaffold

This is a general project scaffolding for Vue projects. This project is a standalone application and uses the Vue CLI to build/serve the output. It will most likely need to be tailored to meet your specific project needs. The commit history was recored with this in mind, in an attempt to show each step that was implemented.  

> **NOTE:** you will also need a `.npmrc` file to pull `@terakeet/styleguide` from it's repository.  The `.npmrc` file is not committed here, as it includes private keys. See the [Typical Install Process](https://terakeet-styleguide-staging.herokuapp.com/storybook/?path=/docs/getting-started-installation--page#typical-install-process) for more details.

## Project setup

```bash
yarn install
```

#### Compiles and hot-reloads for development

This will typically run at `localhost:8080`

```bash
yarn serve
```

#### Compiles and minifies for production

```bash
yarn build
```

#### Run your unit tests

```bash
yarn test:unit
```

#### Lints and fixes files

```bash
yarn lint
```

## Project Features

### API Layer

API requests are handled by the Axios library. They are abstracted into an API Layer for easier managing.

#### Relevant Files

- `src/api`

#### Example

- `src/views/customerReports/CustomerReport.vue`

### Components

At the top-level, components should be 1 of 2 types:

- **Base** components are heavily reused throughout the project. The are automatically available within any `.vue` file.
- **Common** components are used throughout the project but may not be used frequently enough to warrant being a base component. They are imported into `.vue` files like any other standard component.  

#### Relevant Files

- `src/components`
- `src/helpers/registerBaseComponents.js`
- `src/main.js`

### Router

Vue Router handles all routing.  As much as possible, routes should be tightly couple with their feature and imported into the main `/src/router/index.js` file. 

#### Relevant Files

- `src/router`

#### Example

- `src/views/customerReports/customerReportsRoutes.js`

### Vuex Store

Vuex is used for global state management.  Vuex Modules are used to seperate concerns (typically features). Modules are kept in the `src/store/modules` instead of with their relevant feature to deter over-utilizing Vuex. 

#### Relevant Files 

- `src/store`

#### Example

- `src/views/customerReports/CustomerReportEdit.vue`

### Styles

In general, within Vue Single File Components; styles should be **scoped** to avoid conflicts.  

**Global CSS** should only be added in `src/App.vue`. This should be done prudently, as it will touch all other component files.

**Global SCSS** should be added in `src/styles/global.scss`.  This will be injected into every `.vue` component file. It is an ideal place to store global variables, mixins, functions, etc.  It should **NOT** include any rendered CSS because it will lead to significant bloat. 

#### Relevant Files

- `src/styles/global.scss` global SCSS
- `src/views/customerReports/CustomerReport.vue` scoped style

### Views

Views are the various features of our application.  They contain all feature-related concerns (expect the Vuex store).  Relevant router views, components that are only utilized in this feature, and any helpers/services can be contained within an individual Views feature directory.

#### Relevant Files

- `src/views`

#### Example

- `src/views/customerReports`

### Frontend Unit Tests

Unit tests should test the expected behaviour of individual componets.  Tests are held within a `__tests__` directory at the same level as the component they are testing.  Jest and Vue Test Utils work in tandem as the Frontend testing suite.

#### Relevant Files

- `jest.config.js`
#### Example

- `src/components/common/InputSpecial/__tests__/InputSpecial.spec.js`

### Linting and Prettier

This project uses ESLint, Prettier, and Stylelint to maintain code standards.  Having a standard is more important than what that standard is. 

If you are using VS Code you can add the following settings to run Prettier on save.

```javascript
// in .vscode/settings.jscon

{
	"editor.formatOnSave": true,
	"editor.formatOnPaste": false,
	"editor.formatOnType": false,
	"editor.defaultFormatter": "esbenp.prettier-vscode"
}


```

#### Relevant Files

- `.eslintrc.js`
- `.prettierignore`
- `prettier.config.js`
- `stylelint.config.js`
