import { test, expect } from "@playwright/test";
import { setupPages } from "../setup/setup";
import {
  getRandomUserData,
  getRandomContactData,
  getRandomContactDataForEdit,
} from "../assets/accounts/happyPathTestData";
const apiConsumer = require("../helpers/apiConsumer");

let page;
let pages;
let userData;
let contactData;
let contactDataForEdit;
let loginPage;
let signUpPage;
let contactListPage;
let addContactPage;
let contactDetailsPage;
let editContactPage;

test.beforeEach(async ({ browser }) => {
  pages = await setupPages(browser);
  page = pages.page;
  await page.goto("https://thinking-tester-contact-list.herokuapp.com/");
  loginPage = pages.loginPage;
  signUpPage = pages.signUpPage;
  contactListPage = pages.contactListPage;
  addContactPage = pages.addContactPage;
  contactDetailsPage = pages.contactDetailsPage;
  editContactPage = pages.editContactPage;
});

test("Sign up happy path", async ({}) => {
  userData = await getRandomUserData();
  await test.step("Log in page is displayed", async () => {
    await loginPage.pageIsDisplayed();
  });
  await test.step("Click on Sign up button", async () => {
    await loginPage.clickOnSignUpBtn();
  });
  await test.step("Sign up page is displayed", async () => {
    await signUpPage.pageIsDisplayed();
  });
  await test.step("Enter first name", async () => {
    await signUpPage.enterFirstName(userData.user.firstName);
  });
  await test.step("Enter last name", async () => {
    await signUpPage.enterLastName(userData.user.lastName);
  });
  await test.step("Enter email", async () => {
    await signUpPage.enterEmail(userData.user.email);
  });
  await test.step("Enter password", async () => {
    await signUpPage.enterPassword(userData.user.pass);
  });
  await test.step("Click on Submit button", async () => {
    await loginPage.clickOnSubmitBtn();
  });
  await test.step("Contact list page is displayed, sign up is successful", async () => {
    await contactListPage.pageIsDisplayed();
  });
  await test.step("Click on logout button", async () => {
    await contactListPage.clickOnLogoutBtn();
  });
  await page.close();
});

test("Log in happy path", async ({}) => {
  userData = (await getRandomUserData()).user;
  var user = (await apiConsumer.createUser(userData)).data;
  expect(user.token).not.toBeNull();
  expect(user.token).not.toBeUndefined();
  await test.step("Log in page is displayed", async () => {
    await loginPage.pageIsDisplayed();
  });
  await test.step("Enter email", async () => {
    await loginPage.enterEmail(userData.email);
  });
  await test.step("Enter password", async () => {
    await loginPage.enterPassword(userData.pass);
  });
  await test.step("Click on Submit button", async () => {
    await loginPage.clickOnSubmitBtn();
  });
  await test.step("Contact list page is displayed, sign up is successful", async () => {
    await contactListPage.pageIsDisplayed();
  });
  await page.close();
});

test("Add contact happy path", async ({}) => {
  userData = (await getRandomUserData()).user;
  var user = (await apiConsumer.createUser(userData)).data;
  contactData = (await getRandomContactData()).contact;
  await test.step("Log in page is displayed", async () => {
    await loginPage.pageIsDisplayed();
  });
  await test.step("Enter email", async () => {
    await loginPage.enterEmail(userData.email);
  });
  await test.step("Enter password", async () => {
    await loginPage.enterPassword(userData.pass);
  });
  await test.step("Click on Submit button", async () => {
    await loginPage.clickOnSubmitBtn();
  });
  await test.step("Contact list page is displayed, user is logged in", async () => {
    await contactListPage.pageIsDisplayed();
  });
  await test.step("Click on Add a new contact button", async () => {
    await contactListPage.clickOnAddNewContactBtn();
  });
  await test.step("Add contact page is displayed", async () => {
    await addContactPage.pageIsDisplayed();
  });
  await test.step("Enter first name", async () => {
    await addContactPage.enterFirstName(contactData.firstName);
  });
  await test.step("Enter last name", async () => {
    await addContactPage.enterLastName(contactData.lastName);
  });
  await test.step("Add date of birth", async () => {
    await addContactPage.enterDateOfBirth(contactData.birthdate);
  });
  await test.step("Enter email", async () => {
    await addContactPage.enterEmail(contactData.email);
  });
  await test.step("Enter phone number", async () => {
    await addContactPage.enterPhone(contactData.phone);
  });
  await test.step("Add street adrress 1", async () => {
    await addContactPage.enterStreetAddress1(contactData.street1);
  });
  await test.step("Add street adrress 2", async () => {
    await addContactPage.enterStreetAddress2(contactData.street2);
  });
  await test.step("Add city", async () => {
    await addContactPage.enterCity(contactData.city);
  });
  await test.step("Enter state or province", async () => {
    await addContactPage.enterStateOrProvince(contactData.stateProvince);
  });
  await test.step("Enter postal code", async () => {
    await addContactPage.enterPostalCode(contactData.postalCode);
  });
  await test.step("Add country", async () => {
    await addContactPage.enterCountry(contactData.country);
  });
  await test.step("Click on submit button", async () => {
    await addContactPage.clickOnSubmitBtn();
  });
  await test.step("Contact list page is displayed", async () => {
    await contactListPage.pageIsDisplayed();
  });
  await test.step("Assert contact first name is displayed in table, contact is properly added", async () => {
    await contactListPage.contactDataIsDisplayedInTable(contactData.firstName);
  });
  await test.step("Assert contact last name is displayed in table, contact is properly added", async () => {
    await contactListPage.contactDataIsDisplayedInTable(contactData.lastName);
  });
  await test.step("Assert contact birth date is displayed in table, contact is properly added", async () => {
    await contactListPage.contactDataIsDisplayedInTable(contactData.birthdate);
  });
  await test.step("Assert contact email is displayed in table, contact is properly added", async () => {
    await contactListPage.contactDataIsDisplayedInTable(contactData.email);
  });
  await test.step("Assert contact phone is displayed in table, contact is properly added", async () => {
    await contactListPage.contactDataIsDisplayedInTable(contactData.phone);
  });
  await test.step("Assert contact address 1 is displayed in table, contact is properly added", async () => {
    await contactListPage.contactDataIsDisplayedInTable(contactData.street1);
  });
  await test.step("Assert contact address 2 is displayed in table, contact is properly added", async () => {
    await contactListPage.contactDataIsDisplayedInTable(contactData.street2);
  });
  await test.step("Assert contact city is displayed in table, contact is properly added", async () => {
    await contactListPage.contactDataIsDisplayedInTable(contactData.city);
  });
  await test.step("Assert contact state/province is displayed in table, contact is properly added", async () => {
    await contactListPage.contactDataIsDisplayedInTable(
      contactData.stateProvince
    );
  });
  await test.step("Assert contact postal code is displayed in table, contact is properly added", async () => {
    await contactListPage.contactDataIsDisplayedInTable(contactData.postalCode);
  });
  await test.step("Assert contact country is displayed in table, contact is properly added", async () => {
    await contactListPage.contactDataIsDisplayedInTable(contactData.country);
  });
  await page.close();
});

test("Delete contact happy path", async ({}) => {
  userData = (await getRandomUserData()).user;
  var user = (await apiConsumer.createUser(userData)).data;
  expect(user.token).not.toBeNull();
  expect(user.token).not.toBeUndefined();
  contactData = (await getRandomContactData()).contact;
  var contact = (await apiConsumer.createContact(contactData, user.token)).data;
  expect(contact.firstName).not.toBeNull();
  expect(contact.firstName).not.toBeUndefined();
  await test.step("Log in page is displayed", async () => {
    await loginPage.pageIsDisplayed();
  });
  await test.step("Enter email", async () => {
    await loginPage.enterEmail(userData.email);
  });
  await test.step("Enter password", async () => {
    await loginPage.enterPassword(userData.pass);
  });
  await test.step("Click on Submit button", async () => {
    await loginPage.clickOnSubmitBtn();
  });
  await test.step("Contact list page is displayed, sign up is successful", async () => {
    await contactListPage.pageIsDisplayed();
  });
  await test.step("Click on contact in table", async () => {
    await contactListPage.clickOnContactInTable(contactData.firstName);
  });
  await test.step("Contact details page is displayed", async () => {
    await contactDetailsPage.pageIsDisplayed();
  });
  await test.step("Click on delete contact button", async () => {
    page.on("dialog", async (dialog) => {
      console.log(`Dialog message: ${dialog.message()}`);
      await dialog.accept();
    });
    await contactDetailsPage.clickOnDeleteContactBtn();
  });
  await test.step("Contact list page is displayed", async () => {
    await contactListPage.pageIsDisplayed();
  });
  await test.step("Assert contact data is not displayed in table, contact is deleted", async () => {
    await contactListPage.contactDataIsNotDisplayedInTable(
      contactData.firstName
    );
    await contactListPage.contactDataIsNotDisplayedInTable(
      contactData.lastName
    );
    await contactListPage.contactDataIsNotDisplayedInTable(contactData.email);
    await contactListPage.contactDataIsNotDisplayedInTable(contactData.country);
  });
  await page.close();
});

test("Edit contact and return to contact list happy path", async ({}) => {
  userData = (await getRandomUserData()).user;
  var user = (await apiConsumer.createUser(userData)).data;
  expect(user.token).not.toBeNull();
  expect(user.token).not.toBeUndefined();
  contactData = (await getRandomContactData()).contact;
  var contact = (await apiConsumer.createContact(contactData, user.token)).data;
  expect(contact.firstName).not.toBeNull();
  expect(contact.firstName).not.toBeUndefined();
  contactDataForEdit = (await getRandomContactDataForEdit()).editedData;
  await test.step("Log in page is displayed", async () => {
    await loginPage.pageIsDisplayed();
  });
  await test.step("Enter email", async () => {
    await loginPage.enterEmail(userData.email);
  });
  await test.step("Enter password", async () => {
    await loginPage.enterPassword(userData.pass);
  });
  await test.step("Click on Submit button", async () => {
    await loginPage.clickOnSubmitBtn();
  });
  await test.step("Contact list page is displayed, sign up is successful", async () => {
    await contactListPage.pageIsDisplayed();
  });
  await test.step("Click on contact in table", async () => {
    await contactListPage.clickOnContactInTable(contactData.firstName);
  });
  await test.step("Contact details page is displayed", async () => {
    await contactDetailsPage.pageIsDisplayed();
  });
  await test.step("Click on edit contact button", async () => {
    await contactDetailsPage.clickOnEditContactBtn();
  });
  await test.step("Edit contact page is displayed", async () => {
    await editContactPage.pageIsDisplayed();
    await page.waitForTimeout(2000);
  });
  await test.step("Edit first name", async () => {
    await editContactPage.editFirstName(contactDataForEdit.firstName);
  });
  await test.step("Edit last name", async () => {
    await editContactPage.editLastName(contactDataForEdit.lastName);
  });
  await test.step("Edit birth date", async () => {
    await editContactPage.editDateOfBirth(contactDataForEdit.birthdate);
  });
  await test.step("Edit email", async () => {
    await editContactPage.editEmail(contactDataForEdit.email);
  });
  await test.step("Edit phone number", async () => {
    await editContactPage.editPhone(contactDataForEdit.phone);
  });
  await test.step("Edit address 1", async () => {
    await editContactPage.editStreetAddress1(contactDataForEdit.street1);
  });
  await test.step("Edit address 2", async () => {
    await editContactPage.editStreetAddress2(contactDataForEdit.street2);
  });
  await test.step("Edit city", async () => {
    await editContactPage.editCity(contactDataForEdit.city);
  });
  await test.step("Edit state or province", async () => {
    await editContactPage.editStateOrProvince(contactDataForEdit.stateProvince);
  });
  await test.step("Edit postal code", async () => {
    await editContactPage.editPostalCode(contactDataForEdit.postalCode);
  });
  await test.step("Edit country", async () => {
    await editContactPage.editCountry(contactDataForEdit.country);
    await page.waitForTimeout(1000);
  });
  await test.step("Click on submit button", async () => {
    await editContactPage.clickOnSubmitBtn();
    await page.waitForTimeout(1000);
  });
  await test.step("Contact details page is displayed", async () => {
    await contactDetailsPage.pageIsDisplayed();
  });
  await test.step("Click on return to contact list", async () => {
    await page.waitForTimeout(1000);
    await contactDetailsPage.clickOnReturnToContactListBtn();
  });
  await test.step("Contact list page is displayed", async () => {
    await contactListPage.pageIsDisplayed();
  });
  await test.step("Assert contact edited first name is displayed in table, contact is properly edited", async () => {
    await contactListPage.contactDataIsDisplayedInTable(
      contactDataForEdit.firstName
    );
  });
  await test.step("Assert contact edited last name is displayed in table, contact is properly edited", async () => {
    await contactListPage.contactDataIsDisplayedInTable(
      contactDataForEdit.lastName
    );
  });
  await test.step("Assert contact edited birth date is displayed in table, contact is properly edited", async () => {
    await contactListPage.contactDataIsDisplayedInTable(
      contactDataForEdit.birthdate
    );
  });
  await test.step("Assert contact edited email is displayed in table, contact is properly edited", async () => {
    await contactListPage.contactDataIsDisplayedInTable(
      contactDataForEdit.email
    );
  });
  await test.step("Assert contact edited phone is displayed in table, contact is properly edited", async () => {
    await contactListPage.contactDataIsDisplayedInTable(
      contactDataForEdit.phone
    );
  });
  await test.step("Assert contact edited address 1 is displayed in table, contact is properly edited", async () => {
    await contactListPage.contactDataIsDisplayedInTable(
      contactDataForEdit.street1
    );
  });
  await test.step("Assert contact edited address 2 is displayed in table, contact is properly edited", async () => {
    await contactListPage.contactDataIsDisplayedInTable(
      contactDataForEdit.street2
    );
  });
  await test.step("Assert contact edited city is displayed in table, contact is properly edited", async () => {
    await contactListPage.contactDataIsDisplayedInTable(
      contactDataForEdit.city
    );
  });
  await test.step("Assert contact edited state/province is displayed in table, contact is properly edited", async () => {
    await contactListPage.contactDataIsDisplayedInTable(
      contactDataForEdit.stateProvince
    );
  });
  await test.step("Assert contact edited postal code is displayed in table, contact is properly edited", async () => {
    await contactListPage.contactDataIsDisplayedInTable(
      contactDataForEdit.postalCode
    );
  });
  await test.step("Assert contact edited country is displayed in table, contact is properly edited", async () => {
    await contactListPage.contactDataIsDisplayedInTable(
      contactDataForEdit.country
    );
  });
  await page.close();
});

test("Log out happy path", async ({}) => {
  userData = (await getRandomUserData()).user;
  var user = (await apiConsumer.createUser(userData)).data;
  expect(user.token).not.toBeNull();
  expect(user.token).not.toBeUndefined();
  await test.step("Log in page is displayed", async () => {
    await loginPage.pageIsDisplayed();
  });
  await test.step("Enter email", async () => {
    await loginPage.enterEmail(userData.email);
  });
  await test.step("Enter password", async () => {
    await loginPage.enterPassword(userData.pass);
  });
  await test.step("Click on Submit button", async () => {
    await loginPage.clickOnSubmitBtn();
  });
  await test.step("Contact list page is displayed, sign up is successful", async () => {
    await contactListPage.pageIsDisplayed();
  });
  await test.step("Click on logout button", async () => {
    await contactListPage.clickOnLogoutBtn();
  });
  await test.step("Log in page is displayed, user is logged out", async () => {
    await loginPage.pageIsDisplayed();
  });
  await page.close();
});
