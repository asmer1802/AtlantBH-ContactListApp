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

module.exports = {
  createUser,
  createContact,
};
