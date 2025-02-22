const axios = require("axios");
const API_URL = "https://thinking-tester-contact-list.herokuapp.com";
const HEADERS = { "Content-Type": "application/json" };

async function makeRequest(url, method, headers, data = null) {
  try {
    const config = {
      method: method,
      url: url,
      headers: headers,
      data: data,
    };
    const response = await axios(config);
    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

async function createUser(data) {
  return makeRequest(`${API_URL}/users`, "post", HEADERS, {
    firstName: data.firstName,
    lastName: data.lastName,
    email: data.email,
    password: data.pass,
  });
}

async function updateUser(updateData, token) {
  return makeRequest(
    `${API_URL}/users/me`,
    "patch",
    { Authorization: "Bearer " + token },
    {
      firstName: updateData.firstName,
      lastName: updateData.lastName,
      email: updateData.email,
      password: updateData.pass,
    }
  );
}

async function deleteUser(token) {
  return makeRequest(
    `${API_URL}/users/me`,
    "delete",
    { Authorization: "Bearer " + token },
    HEADERS
  );
}

async function getUserProfile(token) {
  return makeRequest(
    `${API_URL}/users/me`,
    "get",
    { Authorization: "Bearer " + token },
    HEADERS
  );
}

async function loginToApp(data) {
  return makeRequest(`${API_URL}/users/login`, "post", HEADERS, {
    email: data.email,
    password: data.pass,
  });
}

async function logOutOfApp(token) {
  return makeRequest(
    `${API_URL}/users/logout`,
    "post",
    { Authorization: "Bearer " + token },
    HEADERS
  );
}

async function createContact(data, token) {
  return makeRequest(
    `${API_URL}/contacts`,
    "post",
    { Authorization: "Bearer " + token },
    {
      firstName: data.firstName,
      lastName: data.lastName,
      birthdate: data.birthdate,
      email: data.email,
      phone: data.phone,
      street1: data.street1,
      street2: data.street2,
      city: data.city,
      stateProvince: data.stateProvince,
      postalCode: data.postalCode,
      country: data.country,
    }
  );
}

async function editContact(id, data, token) {
  return makeRequest(
    `${API_URL}/contacts/${id}`,
    "put",
    { Authorization: "Bearer " + token },
    {
      firstName: data.firstName,
      lastName: data.lastName,
      birthdate: data.birthdate,
      email: data.email,
      phone: data.phone,
      street1: data.street1,
      street2: data.street2,
      city: data.city,
      stateProvince: data.stateProvince,
      postalCode: data.postalCode,
      country: data.country,
    }
  );
}

async function getContactList(token) {
  return makeRequest(`${API_URL}/contacts/`, "get", {
    Authorization: "Bearer " + token,
  });
}

async function deleteContact(id, token) {
  return makeRequest(`${API_URL}/contacts/${id}`, "delete", {
    Authorization: "Bearer " + token,
  });
}

module.exports = {
  createUser,
  createContact,
  loginToApp,
  deleteContact,
  editContact,
  logOutOfApp,
  updateUser,
  getUserProfile,
  deleteUser,
  getContactList,
};
