function generate7digitsNum() {
  return Math.floor(Math.random() * 9000000) + 1000000;
}

function generate6digitsNum() {
  return Math.floor(Math.random() * 900000) + 100000;
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

async function getRandomUserUpdateData() {
  var randomNumber = generate7digitsNum();

  const userUpdate = {
    firstName: "AsmerTest",
    lastName: "HaracicTest",
    email: "asmer+test" + randomNumber + "@gmail" + randomNumber + ".com",
    pass: "Test1234!",
  };
  return { userUpdate };
}

async function getRandomContactData() {
  var randomNumber = generate7digitsNum();
  var randomNumber1 = generate6digitsNum();

  const contact = {
    firstName: "John",
    lastName: "Doe",
    birthdate: "1970-01-01",
    email: "asmer+" + randomNumber + "@gmail" + randomNumber + ".com",
    phone: randomNumber1.toString(),
    street1: "1 Main St.",
    street2: "Apartment A",
    city: "Anytown",
    stateProvince: "KS",
    postalCode: "12345",
    country: "USA",
  };

  return { contact };
}

async function getRandomContactDataForEdit() {
  var randomNumber = generate7digitsNum();
  var randomNumber1 = generate6digitsNum();

  const editedData = {
    firstName: "Jane",
    lastName: "Done",
    birthdate: "1980-02-02",
    email: "haracic+" + randomNumber1 + "@gmail" + randomNumber1 + ".com",
    phone: randomNumber.toString(),
    street1: "2 Main St.",
    street2: "Apartment B",
    city: "Sometown",
    stateProvince: "TK",
    postalCode: "6789",
    country: "CAN",
  };
  return { editedData };
}

module.exports = {
  getRandomUserData,
  getRandomContactData,
  getRandomContactDataForEdit,
  getRandomUserUpdateData,
};
