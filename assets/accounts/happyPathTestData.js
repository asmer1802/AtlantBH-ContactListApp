function generate7digitsNum() {
  return Math.floor(Math.random() * 9000000) + 1000000;
}

async function getRandomUserData() {
  var randomNumber = generate7digitsNum();

  const user = {
    email: "asmer+" + randomNumber + "@gmail" + randomNumber + ".com",
    firstName: "Asmer",
    lastName: "Haracic",
    pass: "Test1234!",
  };
  return { user };
}

async function getRandomContactData() {
  var randomNumber = generate7digitsNum();

  const contact = {
    firstName: "John",
    lastName: "Doe",
    birthdate: "1970-01-01",
    email: "asmer+" + randomNumber + "@gmail" + randomNumber + ".com",
    phone: randomNumber,
    street1: "1 Main St.",
    street2: "Apartment A",
    city: "Anytown",
    stateProvince: "KS",
    postalCode: "12345",
    country: "USA",
  };
  return { contact };
}

module.exports = { getRandomUserData, getRandomContactData };
