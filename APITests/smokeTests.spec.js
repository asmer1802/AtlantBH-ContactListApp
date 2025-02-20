import { test, expect } from "@playwright/test";
import { setupPages } from "../setup/setup";
import {
  getRandomUserData,
  getRandomContactData,
} from "../assets/accounts/happyPathTestData";
//import { createUser } from "../helpers/apiConsumer";
const apiConsumer = require("../helpers/apiConsumer");

// let page;
// let pages;
let userData;
// let contactData;
// let loginPage;
// let signUpPage;
// let contactListPage;

// test.beforeAll(async ({ browser }) => {
//   pages = await setupPages(browser);
//   page = pages.page;
//   await page.goto("https://thinking-tester-contact-list.herokuapp.com/");
//   loginPage = pages.loginPage;
//   signUpPage = pages.signUpPage;
//   contactListPage = pages.contactListPage;
// });

// test("Sign up happy path", async ({}) => {
//   userData = await getRandomUserData();
//   await test.step("Log in page is displayed", async () => {
//     await loginPage.pageIsDisplayed();
//   });
//   await test.step("Click on Sign up button", async () => {
//     await loginPage.clickOnSignUpBtn();
//   });
//   await test.step("Sign up page is displayed", async () => {
//     await signUpPage.pageIsDisplayed();
//   });
//   await test.step("Enter first name", async () => {
//     await signUpPage.enterFirstName(userData.user.firstName);
//   });
//   await test.step("Enter last name", async () => {
//     await signUpPage.enterLastName(userData.user.lastName);
//   });
//   await test.step("Enter email", async () => {
//     await signUpPage.enterEmail(userData.user.email);
//   });
//   await test.step("Enter password", async () => {
//     await signUpPage.enterPassword(userData.user.pass);
//   });
//   await test.step("Click on Submit button", async () => {
//     await loginPage.clickOnSubmitBtn();
//   });
//   await test.step("Contact list page is displayed, sign up is successful", async () => {
//     await contactListPage.pageIsDisplayed();
//   });
//   await test.step("Click on logout button", async () => {
//     await contactListPage.clickOnLogoutBtn();
//   });
// });

// test("Log in happy path", async ({}) => {
//   userData = (await getRandomUserData()).user;
//   var user = (await apiConsumer.createUser(userData)).data;
//   expect(user.token).not.toBeNull();
//   expect(user.token).not.toBeUndefined();
//   await test.step("Log in page is displayed", async () => {
//     await loginPage.pageIsDisplayed();
//   });
//   await test.step("Enter email", async () => {
//     await loginPage.enterEmail(userData.email);
//   });
//   await test.step("Enter password", async () => {
//     await loginPage.enterPassword(userData.pass);
//   });
//   await test.step("Click on Submit button", async () => {
//     await loginPage.clickOnSubmitBtn();
//   });
//   await test.step("Contact list page is displayed, sign up is successful", async () => {
//     await contactListPage.pageIsDisplayed();
//   });
// });

test("Sign up happy path", async ({}) => {
  userData = (await getRandomUserData()).user;
  var user = await apiConsumer.createUser(userData);
  expect(user.status).toBe(201);
  expect(user.data.user["_id"]).not.toBeNull();
  expect(user.data.user.firstname).toBe(userData.firstName);
  expect(user.token).not.toBeNull();
  expect(user.token).not.toBeUndefined();
  // contactData = (await getRandomContactData()).contact;
  // var contact = (await apiConsumer.createContact(contactData, user.token)).data;
  // expect(contact.firstName).not.toBeNull();
  // expect(contact.firstName).not.toBeUndefined();
  // await test.step("Log in page is displayed", async () => {
  //   await loginPage.pageIsDisplayed();
  // });
  // await test.step("Enter email", async () => {
  //   await loginPage.enterEmail(userData.email);
  // });
  // await test.step("Enter password", async () => {
  //   await loginPage.enterPassword(userData.pass);
  // });
  // await test.step("Click on Submit button", async () => {
  //   await loginPage.clickOnSubmitBtn();
  // });
  // await test.step("Contact list page is displayed, sign up is successful", async () => {
  //   await contactListPage.pageIsDisplayed();
  //   await page.waitForTimeout(10000);
  // });
});
