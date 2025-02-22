const { expect } = require("@playwright/test");

exports.EditContactPage = class EditContactPage {
  constructor(page) {
    if (!page) {
      throw new Error(
        "🚨 Error: Page is undefined in ContactListPage constructor!"
      );
    }
    this.page = page;

    const elements = [
      (this.pageTitle = page.getByText("Edit Contact")),
      (this.submitBtn = page.locator(
        'xpath=//button[contains(text(), "Submit")]'
      )),
      (this.cancelBtn = page.locator(
        'xpath=//button[contains(text(), "Cancel")]'
      )),
      (this.firstNameInput = page.getByTestId("firstName")),
      (this.lastNameInput = page.getByTestId("lastName")),
      (this.birthdateInput = page.getByTestId("birthdate")),
      (this.emailInput = page.getByTestId("email")),
      (this.phoneInput = page.getByTestId("phone")),
      (this.addressInput1 = page.getByTestId("street1")),
      (this.addressInput2 = page.getByTestId("street2")),
      (this.cityInput = page.getByTestId("city")),
      (this.stateProvinceInput = page.getByTestId("stateProvince")),
      (this.postalCodeInput = page.getByTestId("postalCode")),
      (this.countryInput = page.getByTestId("country")),
    ];
    this.elements = elements;
  }

  async pageIsDisplayed() {
    await expect(this.pageTitle).toBeVisible(),
      await expect(this.submitBtn).toBeVisible(),
      await expect(this.cancelBtn).toBeVisible();
  }

  async clickOnSubmitBtn() {
    await this.submitBtn.click();
  }

  async editFirstName(name) {
    await this.firstNameInput.clear();
    await this.firstNameInput.fill(name);
  }

  async editLastName(name) {
    await this.lastNameInput.clear();
    await this.lastNameInput.fill(name);
  }

  async editDateOfBirth(date) {
    await this.birthdateInput.clear();
    await this.birthdateInput.fill(date);
  }

  async editEmail(email) {
    await this.emailInput.clear();
    await this.emailInput.fill(email);
  }

  async editPhone(number) {
    await this.phoneInput.clear();
    await this.phoneInput.fill(number);
  }

  async editStreetAddress1(address) {
    await this.addressInput1.clear();
    await this.addressInput1.fill(address);
  }

  async editStreetAddress2(address) {
    await this.addressInput2.clear();
    await this.addressInput2.fill(address);
  }

  async editCity(city) {
    await this.cityInput.clear();
    await this.cityInput.fill(city);
  }

  async editStateOrProvince(state) {
    await this.stateProvinceInput.clear();
    await this.stateProvinceInput.fill(state);
  }

  async editPostalCode(code) {
    await this.postalCodeInput.clear();
    await this.postalCodeInput.fill(code);
  }

  async editCountry(country) {
    await this.countryInput.clear();
    await this.countryInput.fill(country);
  }
};
