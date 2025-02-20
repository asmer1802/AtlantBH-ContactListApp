import { LoginPage } from "../pages/LoginPage";
import { ContactListPage } from "../pages/contactListPage";
import { AddContactPage } from "../pages/addContactPage";
import { SignUpPage } from "../pages/SignUpPage";

let page;
let loginPage;
let contactListPage;
let addContactPage;
let signUpPage;

async function setupPages(browser) {
  // const context = await browser.newContext();
  // const page = await context.newPage();
  page = await browser.newPage();
  loginPage = new LoginPage(page);
  contactListPage = new ContactListPage(page);
  addContactPage = new AddContactPage(page);
  signUpPage = new SignUpPage(page);

  return {
    page,
    loginPage,
    contactListPage,
    addContactPage,
    signUpPage,
  };
}

module.exports = {
  setupPages,
};
