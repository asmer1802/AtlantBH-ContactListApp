const { expect } = require("@playwright/test");

exports.SignUpPage = class SignUpPage {
  constructor(page) {
    if (!page) {
      throw new Error("🚨 Error: Page is undefined in SignUpPage constructor!");
    }
    this.page = page;

    const elements = [
      (this.pageTitle = page.locator(
        'xpath=//h1[contains(text(), "Add User")]'
      )),
      (this.firstNameInput = page.getByTestId("firstName")),
      (this.lastNameInput = page.getByTestId("lastName")),
      (this.emailInput = page.getByTestId("email")),
      (this.passwordInput = page.getByTestId("password")),
      (this.submitBtn = page.getByTestId("submit")),
      (this.cancelBtn = page.getByTestId("cancel")),
    ];
    this.elements = elements;
  }

  async pageIsDisplayed() {
    await expect(this.emailInput).toBeVisible(),
      await expect(this.passwordInput).toBeVisible(),
      await expect(this.submitBtn).toBeVisible(),
      await expect(this.cancelBtn).toBeVisible(),
      await expect(this.pageTitle).toBeVisible(),
      await expect(this.firstNameInput).toBeVisible();
    await expect(this.lastNameInput).toBeVisible();
  }

  async enterFirstName(name) {
    await this.firstNameInput.fill(name);
  }

  async enterLastName(name) {
    await this.lastNameInput.fill(name);
  }

  async enterEmail(email) {
    await this.emailInput.fill(email);
  }

  async enterPassword(password) {
    await this.passwordInput.fill(password);
  }

  async clickOnSubmitBtn() {
    await this.submitBtn.click();
  }

  async clickOnCancelBtn() {
    await this.cancelBtn.click();
  }
};
