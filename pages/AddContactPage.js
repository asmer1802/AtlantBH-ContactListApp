const { expect } = require("@playwright/test");

exports.AddContactPage = class AddContactPage {
  constructor(page) {
    if (!page) {
      throw new Error(
        "🚨 Error: Page is undefined in AddContactPage constructor!"
      );
    }
    this.page = page;

    const elements = [
      (this.pageTitle = page.locator(
        'xpath=//h1[contains(text(), "Add Contact")]'
      )),
      (this.submitBtn = page.locator(
        'xpath=//button[contains(text(), "Submit")]'
      )),
      (this.cancelBtn = page.locator(
        'xpath=//button[contains(text(), "Cancel")]'
      )),
      (this.logoutBtn = page.getByTestId("logout")),
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
      await expect(this.logoutBtn).toBeVisible(),
      await expect(this.firstNameInput).toBeVisible(),
      await expect(this.lastNameInput).toBeVisible(),
      await expect(this.cancelBtn).toBeVisible();
  }

  async enterFirstName(name) {
    await this.firstNameInput.fill(name);
  }

  async enterLastName(name) {
    await this.lastNameInput.fill(name);
  }

  async enterDateOfBirth(date) {
    await this.enterDateOfBirth.fill(date);
  }

  async enterEmail(email) {
    await this.emailInput.fill(email);
  }

  async enterPhone(number) {
    await this.phoneInput.fill(number);
  }

  async enterStreetAddress1(address) {
    await this.addressInput1.fill(address);
  }

  async enterStreetAddress2(address) {
    await this.addressInput2.fill(address);
  }

  async enterCity(city) {
    await this.cityInput.fill(city);
  }

  async enterStateOrProvince(state) {
    await this.stateProvinceInput.fill(state);
  }

  async enterPostalCode(code) {
    await this.postalCodeInput.fill(code);
  }

  async enterCountry(country) {
    await this.countryInput.fill(country);
  }

  async clickOnLogoutBtn() {
    await this.logoutBtn.click();
  }

  async clickOnSubmitBtn() {
    await this.submitBtn.click();
  }

  async clickOnCancelBtn() {
    await this.cancelBtn.click();
  }
};
