import { test, expect } from "@playwright/test";
import { setupPages } from "../setup/setup";
import {
  getRandomUserData,
  getRandomContactData,
  getRandomContactDataForEdit,
  getRandomUserUpdateData,
} from "../assets/accounts/happyPathTestData";
const apiConsumer = require("../helpers/apiConsumer");

let userData;
let contactData;
let editedContactData;
let updatedUserData;
let secondContactData;

test("Sign up happy path", async ({}) => {
  userData = (await getRandomUserData()).user;
  var response = await apiConsumer.createUser(userData);
  expect(response.status).toBe(201);
  expect(response.data.token).not.toBeNull();
  expect(response.data.token).not.toBeUndefined();
  var createdUser = response.data.user;
  expect(createdUser._id).not.toBeNull();
  expect(createdUser.firstName).toBe(userData.firstName);
  expect(createdUser.lastName).toBe(userData.lastName);
  expect(createdUser.email).toBe(userData.email);
});

test("Log in happy path", async ({}) => {
  userData = (await getRandomUserData()).user;
  var firstUser = await apiConsumer.createUser(userData);
  expect(firstUser.status).toBe(201);
  var response = await apiConsumer.loginToApp(userData);
  expect(response.status).toBe(200);
  expect(response.data.token).not.toBeNull();
  expect(response.data.token).not.toBeUndefined();
  var createdUser = response.data.user;
  expect(createdUser._id).not.toBeNull();
  expect(createdUser.firstName).toBe(userData.firstName);
  expect(createdUser.lastName).toBe(userData.lastName);
  expect(createdUser.email).toBe(userData.email);
});

test("Update user and get user profile happy path", async ({}) => {
  userData = (await getRandomUserData()).user;
  var response = await apiConsumer.createUser(userData);
  expect(response.status).toBe(201);
  console.log("API Response:", response);
  expect(response.data.token).not.toBeNull();
  expect(response.data.token).not.toBeUndefined();
  var createdUser = response.data.user;
  expect(createdUser._id).not.toBeNull();
  expect(createdUser.firstName).toBe(userData.firstName);
  expect(createdUser.lastName).toBe(userData.lastName);
  expect(createdUser.email).toBe(userData.email);
  updatedUserData = (await getRandomUserUpdateData()).userUpdate;
  console.log("API Response:", updatedUserData);
  var updatedResponse = await apiConsumer.updateUser(
    updatedUserData,
    response.data.token
  );
  expect(updatedResponse.status).toBe(200);
  console.log("API Response:", updatedResponse);
  var updatedUser = updatedResponse.data;
  expect(updatedUser._id).toBe(createdUser._id);
  expect(updatedUserData.firstName).toBe(updatedUser.firstName);
  expect(updatedUserData.lastName).toBe(updatedUser.lastName);
  expect(updatedUserData.email).toBe(updatedUser.email);
  var getUserResponse = await apiConsumer.getUserProfile(response.data.token);
  expect(getUserResponse.status).toBe(200);
  var finalUser = getUserResponse.data;
  expect(finalUser._id).toBe(createdUser._id);
  expect(finalUser.firstName).toBe(updatedUserData.firstName);
  expect(finalUser.lastName).toBe(updatedUserData.lastName);
  expect(finalUser.email).toBe(updatedUserData.email);
});

test("Delete user happy path", async ({}) => {
  userData = (await getRandomUserData()).user;
  var response = await apiConsumer.createUser(userData);
  expect(response.status).toBe(201);
  expect(response.data.token).not.toBeNull();
  expect(response.data.token).not.toBeUndefined();
  var createdUser = response.data.user;
  expect(createdUser._id).not.toBeNull();
  expect(createdUser.firstName).toBe(userData.firstName);
  expect(createdUser.lastName).toBe(userData.lastName);
  expect(createdUser.email).toBe(userData.email);
  var deletedUser = await apiConsumer.deleteUser(response.data.token);
  expect(deletedUser.status).toBe(200);
});

test("Add contact happy path", async ({}) => {
  userData = (await getRandomUserData()).user;
  var signUpResponse = await apiConsumer.createUser(userData);
  expect(signUpResponse.status).toBe(201);
  contactData = (await getRandomContactData()).contact;
  var createContactResponse = await apiConsumer.createContact(
    contactData,
    signUpResponse.data.token
  );
  expect(createContactResponse.status).toBe(201);
  var createdContact = createContactResponse.data;
  expect(createdContact._id).not.toBeNull();
  expect(createdContact.firstName).toBe(contactData.firstName);
  expect(createdContact.lastName).toBe(contactData.lastName);
  expect(createdContact.birthdate).toBe(contactData.birthdate);
  expect(createdContact.email).toBe(contactData.email);
  expect(createdContact.phone).toBe(contactData.phone);
  expect(createdContact.street1).toBe(contactData.street1);
  expect(createdContact.street2).toBe(contactData.street2);
  expect(createdContact.city).toBe(contactData.city);
  expect(createdContact.stateProvince).toBe(contactData.stateProvince);
  expect(createdContact.postalCode).toBe(contactData.postalCode);
  expect(createdContact.country).toBe(contactData.country);
});

test("Add two contacts, then get contact list happy path", async ({}) => {
  userData = (await getRandomUserData()).user;
  var signUpResponse = await apiConsumer.createUser(userData);
  expect(signUpResponse.status).toBe(201);
  contactData = (await getRandomContactData()).contact;
  var createContactResponse = await apiConsumer.createContact(
    contactData,
    signUpResponse.data.token
  );
  expect(createContactResponse.status).toBe(201);
  var createdContact = createContactResponse.data;
  expect(createdContact._id).not.toBeNull();
  expect(createdContact.firstName).toBe(contactData.firstName);
  expect(createdContact.lastName).toBe(contactData.lastName);
  expect(createdContact.birthdate).toBe(contactData.birthdate);
  expect(createdContact.email).toBe(contactData.email);
  expect(createdContact.phone).toBe(contactData.phone);
  expect(createdContact.street1).toBe(contactData.street1);
  expect(createdContact.street2).toBe(contactData.street2);
  expect(createdContact.city).toBe(contactData.city);
  expect(createdContact.stateProvince).toBe(contactData.stateProvince);
  expect(createdContact.postalCode).toBe(contactData.postalCode);
  expect(createdContact.country).toBe(contactData.country);
  secondContactData = (await getRandomContactDataForEdit()).editedData;
  var createSecondContactResponse = await apiConsumer.createContact(
    secondContactData,
    signUpResponse.data.token
  );
  expect(createSecondContactResponse.status).toBe(201);
  var createdSecondContact = createSecondContactResponse.data;
  expect(createdSecondContact._id).not.toBeNull();
  expect(createdSecondContact.firstName).toBe(secondContactData.firstName);
  expect(createdSecondContact.lastName).toBe(secondContactData.lastName);
  expect(createdSecondContact.birthdate).toBe(secondContactData.birthdate);
  expect(createdSecondContact.email).toBe(secondContactData.email);
  expect(createdSecondContact.phone).toBe(secondContactData.phone);
  expect(createdSecondContact.street1).toBe(secondContactData.street1);
  expect(createdSecondContact.street2).toBe(secondContactData.street2);
  expect(createdSecondContact.city).toBe(secondContactData.city);
  expect(createdSecondContact.stateProvince).toBe(
    secondContactData.stateProvince
  );
  expect(createdSecondContact.postalCode).toBe(secondContactData.postalCode);
  expect(createdSecondContact.country).toBe(secondContactData.country);
  var getContactListResponse = await apiConsumer.getContactList(
    signUpResponse.data.token
  );
  expect(getContactListResponse.status).toBe(200);
  var contactResponse1 = getContactListResponse.data[0];
  var contactResponse2 = getContactListResponse.data[1];
  expect(createdContact._id).toBe(contactResponse1._id);
  expect(createdContact.firstName).toBe(contactResponse1.firstName);
  expect(createdContact.lastName).toBe(contactResponse1.lastName);
  expect(createdContact.birthdate).toBe(contactResponse1.birthdate);
  expect(createdContact.email).toBe(contactResponse1.email);
  expect(createdContact.phone).toBe(contactResponse1.phone);
  expect(createdContact.street1).toBe(contactResponse1.street1);
  expect(createdContact.street2).toBe(contactResponse1.street2);
  expect(createdContact.city).toBe(contactResponse1.city);
  expect(createdContact.stateProvince).toBe(contactResponse1.stateProvince);
  expect(createdContact.postalCode).toBe(contactResponse1.postalCode);
  expect(createdContact.country).toBe(contactResponse1.country);

  expect(createdSecondContact._id).toBe(contactResponse2._id);
  expect(createdSecondContact.firstName).toBe(contactResponse2.firstName);
  expect(createdSecondContact.lastName).toBe(contactResponse2.lastName);
  expect(createdSecondContact.birthdate).toBe(contactResponse2.birthdate);
  expect(createdSecondContact.email).toBe(contactResponse2.email);
  expect(createdSecondContact.phone).toBe(contactResponse2.phone);
  expect(createdSecondContact.street1).toBe(contactResponse2.street1);
  expect(createdSecondContact.street2).toBe(contactResponse2.street2);
  expect(createdSecondContact.city).toBe(contactResponse2.city);
  expect(createdSecondContact.stateProvince).toBe(
    contactResponse2.stateProvince
  );
  expect(createdSecondContact.postalCode).toBe(contactResponse2.postalCode);
  expect(createdSecondContact.country).toBe(contactResponse2.country);
});

test("Delete contact happy path", async ({}) => {
  userData = (await getRandomUserData()).user;
  var signUpResponse = await apiConsumer.createUser(userData);
  expect(signUpResponse.status).toBe(201);
  contactData = (await getRandomContactData()).contact;
  var createContactResponse = await apiConsumer.createContact(
    contactData,
    signUpResponse.data.token
  );
  expect(createContactResponse.status).toBe(201);
  var deleteContactResponse = await apiConsumer.deleteContact(
    createContactResponse.data._id,
    signUpResponse.data.token
  );
  expect(deleteContactResponse.status).toBe(200);
});

test("Edit contact happy path", async ({}) => {
  userData = (await getRandomUserData()).user;
  var signUpResponse = await apiConsumer.createUser(userData);
  expect(signUpResponse.status).toBe(201);
  contactData = (await getRandomContactData()).contact;
  var createContactResponse = await apiConsumer.createContact(
    contactData,
    signUpResponse.data.token
  );
  expect(createContactResponse.status).toBe(201);

  editedContactData = (await getRandomContactDataForEdit()).editedData;

  var editContactResponse = await apiConsumer.editContact(
    createContactResponse.data._id,
    editedContactData,
    signUpResponse.data.token
  );
  expect(editContactResponse.status).toBe(200);
  var editedContact = editContactResponse.data;
  expect(editedContact._id).not.toBeNull();
  expect(editedContact.firstName).toBe(editedContactData.firstName);
  expect(editedContact.lastName).toBe(editedContactData.lastName);
  expect(editedContact.birthdate).toBe(editedContactData.birthdate);
  expect(editedContact.email).toBe(editedContactData.email);
  expect(editedContact.phone).toBe(editedContactData.phone);
  expect(editedContact.street1).toBe(editedContactData.street1);
  expect(editedContact.street2).toBe(editedContactData.street2);
  expect(editedContact.city).toBe(editedContactData.city);
  expect(editedContact.stateProvince).toBe(editedContactData.stateProvince);
  expect(editedContact.postalCode).toBe(editedContactData.postalCode);
  expect(editedContact.country).toBe(editedContactData.country);
});

test("Log out happy path", async ({}) => {
  userData = (await getRandomUserData()).user;
  var signUpResponse = await apiConsumer.createUser(userData);
  expect(signUpResponse.status).toBe(201);
  var logInResponse = await apiConsumer.loginToApp(userData);
  expect(logInResponse.status).toBe(200);
  expect(logInResponse.data.token).not.toBeNull();
  expect(logInResponse.data.token).not.toBeUndefined();
  var logoutResponse = await apiConsumer.logOutOfApp(signUpResponse.data.token);
  expect(logoutResponse.status).toBe(200);
});
