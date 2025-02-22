import { LoginPage } from "../pages/LoginPage";
import { ContactListPage } from "../pages/contactListPage";
import { AddContactPage } from "../pages/addContactPage";
import { SignUpPage } from "../pages/SignUpPage";
import { ContactDetailsPage } from "../pages/ContactDetailsPage";
import { EditContactPage } from "../pages/EditContactPage";

let page;
let loginPage;
let contactListPage;
let addContactPage;
let signUpPage;
let contactDetailsPage;
let editContactPage;

async function setupPages(browser) {
  page = await browser.newPage();
  loginPage = new LoginPage(page);
  contactListPage = new ContactListPage(page);
  addContactPage = new AddContactPage(page);
  signUpPage = new SignUpPage(page);
  contactDetailsPage = new ContactDetailsPage(page);
  editContactPage = new EditContactPage(page);

  return {
    page,
    loginPage,
    contactListPage,
    addContactPage,
    signUpPage,
    contactDetailsPage,
    editContactPage,
  };
}

module.exports = {
  setupPages,
};
