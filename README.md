# AtlantBH - Contact List App

This project is supposed to land me a new job.
It contains UI smoke tests and API smoke tests for an AtlantBH QA assignment app called Contact List App.
The app can be found at the following url: https://thinking-tester-contact-list.herokuapp.com/

## Setup

To be able to run tests, a user should have node installed.
To check if node is installed type `node --version`.
Please make sure that you have node installed.
To run tests do the following:

1. Clone Git project: `git clone https://github.com/asmer1802/AtlantBH-ContactListApp.git`
2. Open the root folder: `cd AtlantBH-ContactListApp`
3. Install dependencies: `npm install`
4. Run UI smoke tests: `npm run smokeUITests`
5. Run API smoke tests: `npm run smokeAPITests`

## Useful information

This project is made using JavaScript and Playwright framework.
To learn more about Playwright please use the official documentation: https://playwright.dev/docs/intro

## Smoke UI tests

The following test cases are covered:

1. Sign up happy path
2. Log in happy path
3. Create contact happy path
4. Edit contact happy path
5. Delete contact happy path
6. Logout happy path

## Smoke API tests

The following test cases are covered:

1. Sign up happy path
2. Log in happy path
3. Create contact happy path
4. Edit contact happy path
5. Delete contact happy path

## Github action

Tests can be triggered through Github Action in 2 ways:

1. Automatically - tests are scheduled at 8AM UTC (API) and 9AM UTC (UI) every day
2. Manually - open the repository and navigate to Actions.
   Click on Run workflow and trigger tests. Once test run is finished, there will be
   a HTML report created in the run artifacts.
