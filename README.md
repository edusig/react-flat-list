# NPM React Library Template

![tests badge](https://github.com/edusig/npm-react-lib-template/actions/workflows/tests.yml/badge.svg)
![release badge](https://github.com/edusig/npm-react-lib-template/actions/workflows/release.yml/badge.svg)

This repo is a template for creating CommonJS and ESM packages using Typescript to publish on NPM.

It is intended to be used for React.js UI, hooks or tool packages

- It uses `tsc` to transpile to CommonJS and `rollup` to build the ESM packages.
- Has a default MIT license
- [Eslint](https://eslint.org/) rules from [@edusig/eslint-config](https://github.com/edusig/eslint-config)
- [Prettier](https://prettier.io/) and [EditorConfig](https://editorconfig.org/) for code formatting
- [Jest](https://jestjs.io/) for testing (with [ts-jest](https://kulshekhar.github.io/ts-jest/))
- [Testing Library](https://testing-library.com/) to help test the UI
- [Storybook](https://storybook.js.org/) to document and preview components
- Github Actions with:
  - Release: using [release-please](https://github.com/googleapis/release-please) that automates CHANGELOG generation
  - Testing: as a default it checks the linter and runs test script

## Before Publish Checklist

- [ ] Update the license
- [ ] Update `rollup.config.js` external packages
- [ ] Update `src/external.ts` to include all the lib files
- [ ] Update `src/index.ts` line 4 to export a named module (optional)
- [ ] Remove or Update `stories/welcome.mdx` with relevant information about the package
- [ ] Add Repo Secrets
  - [ ] Add GITHUB_TOKEN (release please uses this to open a PR with new changes)
  - [ ] Add NPM_TOKEN (release please uses this to publish a new package to NPM)
- [ ] Update package.json
  - [ ] Package name
  - [ ] Package version
  - [ ] Homepage
  - [ ] Repository
  - [ ] Bugs url
  - [ ] Author
  - [ ] License
  - [ ] Contributors
