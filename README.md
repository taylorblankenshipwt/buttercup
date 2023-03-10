<br />
<div align="center">
    <p align="center">
    MANGO
    <br />
  <!-- Relevant Project Links -->
    <br />

[Coding Patterns & Practices](#coding-patterns--practices)
·
<a href="https://taylorblankenship.atlassian.net/jira/software/c/projects/PN/boards/1">Jira Board</a>
·
<a href="https://www.figma.com/file/Otg2TnX6eqwLevX1yq3CAL/Mango?node-id=0%3A1&t=WYLxGgcHXoABH1T9-0">Figma Designs</a>
·
<a href="https://buttercup.vercel.app/">Production Site</a>

  </p>
</div>

---

<details>
  <summary>Table of Contents</summary>
  
  - [Frameworks & Libraries Used](#frameworks--libraries-used)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
  - [Developer Workflow](#developer-workflow)
    - [Running Local Server](#running-local-server)
    - [Running ESLint & Stylelint](#running-eslint-and-stylelint)
    - [Running Unit Tests](#running-unit-tests)
</details>

---

<!-- ABOUT THE PROJECT -->

## Frameworks & Libraries Used

Listed below are the main frameworks/libraries used to build this website.

- [![Next][next.js]][next-url]
- [![React][react.js]][react-url]
- [![TypeScript][typescript-img]][typescript-url]
- [![Sass][sass-img]][sass-url]

<br />

Listed below are the testing frameworks and libraries used to write automated tests.

- [![Jest][jest-img]][jest-url]
- [![React Testing Library][testing-library-img]][testing-library-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

To get this project set up locally, go through the steps below.

### Prerequisites

- Visual Studio Code is not required for this project but is recommended. You can [download VS Code from here](https://code.visualstudio.com/).

### Installation

1. Clone the repo
   ```sh
   git clone git@github.com/taylorblankenshipwt/buttercup.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- Developer Workflow -->

## Developer Workflow

### Running Local Server

To run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

To create a static build:

```bash
npm run build
```

Check the `out` directory to see all of the build artifacts.

<br />

### Running ESLint and Stylelint

To run the linters on your project:

```bash
npm run lint  # Runs ESLint on Typescript and React files
npm run lint:style  # Runs Stylelint on .scss files
npm run lint:all  # Runs both ESLint and Stylelint on your project files
```

<br />

## Testing

### Running Unit Tests

To run all unit tests:

```bash
npm run test
```

To run typechecks:

```bash
npm run typecheck
```

### Test IDs

A `shared` directory has been established to maintain test ID constants that can be used across the FE tests.

When creating a unit test that requires test IDs, use the import statement

```
import { TestIDs } from 'shared/TestIDs'
```

to pull in a class instance with all declared test IDs. Test IDs within the class are grouped into objects based on components, with properties that represent elements within the component. For example: `TestIDs.DoggyLink.DoggyLinkName` should reference the declared test ID for the name field within `DoggyLink`.

When tagging a TSX element with a test ID, use the import statement

```
import { assignTestID } from 'shared/TestIDs'
```

to pull in a function that returns a test ID attribute. The assigned value is type-enforced so that the argument must be the key for a declared test ID in the TestIDs class. The syntax for assigning a test ID looks like this:

```
<div {...assignTestID('DoggyLinkName')} />
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Web Environments

Mango's Web platform currently supports three different environments: Local, Development, and Production. Deployed version of Production environment can be found at [buttercup.vercel.app/](https://buttercup.vercel.app/). The Local environment can be accessed by running `npm run dev` on your machine, then navigating to [http://localhost:3000](http://localhost:3000).

### Local

Local is the version of the application that can be run locally; no formal build or deployment process is necessary. It tends to be used mainly when doing local branch testing prior to PR merges to `develop`.

### Development

Development is the most up-to-date version of the codebase, with features from both past releases and upcoming releases. All work must go through Development in order to be eventually added to Production.

### Production

Production is a collection of released features; all work added to Production is stable enough to be user-facing.

Currently data across all three environments is the same, sourced from the same data lake.

Merges to the `develop` branch lead to automated deployments to the Development environment, while merges to the `main` branch result in deployments to the Production environment.

In order to successfully merge to Development, the to-be-merged code must pass all validation checks. To merge to Production, the `develop` branch must first successfully build and deploy to Development.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Pipelines

There are four existing pipelines that use GitHub Actions: PR Validation, Run PR Branch Name Check, Vercel Preview Deployment (for Develop), and Vercel Production Deployment (for Production).

Branch protections have been configured so that PR Validation will run on any PRs attempting to merge changes into `develop`. It runs unit testing, linting checks, and type checks. Failure of any validation checks will throw an error and prevent the merging of the tested branch.

Run PR Branch Name Check runs on creation of a PR that is merging into main. Its purpose is to prevent accidental merges of untested code into production.

Vercel Preview Deployment and Vercel Production Deployment run on merges to develop and main respectively. They deploy the site to their intended environments.

## Release Process

Mango’s `develop` and `main` branches represent Development and Production, with feature work being implemented and added to the `develop` branch, and eventually released via the `main` branch.

When a new release is ready to be cut, a new PR should be created to merge the `develop` branch into the `main` branch.

### How to release to Production

1. Create a PR to merge `develop` into `main`.
1. When the PR is approved and has passed all required checks, merge all commits.

Congrats! You’ve completed the release.

Following the merge into `main`, GitHub automatically displays a banner stating `main` has had recent changes. _Do not_ attempt to merge `main`’s changes back into `develop`. The banner can be ignored.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Coding Patterns & Practices

<div align="center">
  
  # Creating React Components
  <p align="center">
    This document describes some of the common patterns we follow when creating React components, including how we structure the <code>components/</code> directory and important files that should be included for each component you make. Within this directory, you can also find example React components that demonstrate the patterns explained here.
  </p>
</div>

<br/>

<!-- REACT COMPONENTS -->

## React Components

<br/>

> **File Naming Pattern:** `ComponentName.tsx`
>
> **Examples:**\
>  &nbsp;&nbsp;&nbsp;Component without props: `templates/ComponentWithoutProps/ComponentWithoutProps.tsx`\
> &nbsp;&nbsp;&nbsp;Component with props: `templates/ComponentWithProps/ComponentWithProps.tsx`

React is a JavaScript library we use for building our user interface. It allows us to compose complex UIs from small and isolated pieces of code called "components". In this project you will find all of our components in the `components/` folder.

Looking in the `components/` folder, you will see a set standard for how to struture your component. Each component has its own folder with the folder and its files named using Pascal Case.


A component folder should resemble the following:

- `Example.tsx` - The React component itself
- `Example.module.scss` - The styles for the component
- `Example.test.tsx` - Unit tests for the component
- `index.ts` - The component export for cleaner import statements

You may find a `helpers.ts` file in some of the components. These helper files can be used for keeping as many helper functions used by your component as you need to keep the component file clean.

<br/>

<!-- STYLING -->

## CSS Module and SASS

<br/>

> **File Naming Pattern:** `ComponentName.module.scss`
>
> **Examples:**\
>  &nbsp;&nbsp;&nbsp;Component without props: `templates/ComponentWithoutProps/ComponentWithoutProps.module.scss`\
> &nbsp;&nbsp;&nbsp;Component with props: `templates/ComponentWithProps/ComponentWithProps.module.scss`

CSS Modules are CSS files in which all class names and animation names are scoped locally by default. The class and animation names are automatically generated to be unique so that you don't have to worry about selector name collisions.

SASS is a CSS pre-processor. It is advanced syntax that allows the use of features not available in CSS that is processed and compiled into regular CSS for the browser to consume.

Using CSS Module with SASS is one of the most widely used combinations of web styling architecture and it allows us to create clean, reusable CSS. There are a few patterns used on this project to be aware of.

<br/>

### Functions and Mixins

Functions and mixins are features of SASS that allow you to define styles or complex operations that can be re-used throughout the website. Functions are defined using `@function` and used in a styles file using the normal CSS function syntax. Mixins are defined using `@mixin` and used in a styles file using `@include`.

Our functions and mixins live in the globalStyles folder, `globalStyles/mixins.scss`, along with a short description of what each does.

To use a function or mixin, make sure you import the file with `@import 'globalStyles/mixins'`. If you try to use any without the import, the compiler will not throw an error and the mixin or function will not work.

<br/>

### Variables

Another feature of SASS we utilize is SASS variables. They allow you to assign a value to a name that begins with `$`, and then refer to that name instead of the value itself. We use SASS variables to define our project colors and breakpoints. These can be found in `globalStyles/variables.scss` and must be imported with `@import 'globalStyles/variables'` to access any variable you want to use in a styles file.


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[next-url]: https://nextjs.org/
[react.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[react-url]: https://reactjs.org/
[typescript-img]: https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white
[typescript-url]: https://www.typescriptlang.org/
[sass-img]: https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white
[sass-url]: https://sass-lang.com/
[jest-img]: https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white
[jest-url]: https://jestjs.io/
[testing-library-img]: https://img.shields.io/badge/-TestingLibrary-%23E33332?style=for-the-badge&logo=testing-library&logoColor=white
[testing-library-url]: https://testing-library.com/docs/react-testing-library/intro/
