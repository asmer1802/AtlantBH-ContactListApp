const { expect } = require("@playwright/test");

exports.LoginPage = class LoginPage {
  constructor(page) {
    if (!page) {
      throw new Error("🚨 Error: Page is undefined in LoginPage constructor!");
    }
    this.page = page;

    const elements = [
      (this.appTitle = page.locator(
        'xpath=//h1[contains(text(), "Contact List App")]'
      )),
      (this.loginText = page.getByText("Log in")),
      (this.emailInputField = page.getByTestId("email")),
      (this.passwordInputField = page.getByTestId("password")),
      (this.submitBtn = page.locator(
        'xpath=//button[contains(text(), "Submit")]'
      )),
      (this.signUpBtn = page.getByTestId("signup")),
    ];
    this.elements = elements;
  }

  async pageIsDisplayed() {
    await expect(this.emailInputField).toBeVisible(),
      await expect(this.passwordInputField).toBeVisible(),
      await expect(this.submitBtn).toBeVisible(),
      await expect(this.signUpBtn).toBeVisible(),
      await expect(this.appTitle).toBeVisible(),
      await expect(this.loginText).toBeVisible();
  }

  async enterEmail(email) {
    await this.emailInputField.fill(email);
  }

  async enterPassword(password) {
    await this.passwordInputField.fill(password);
  }

  async clickOnSubmitBtn() {
    await this.submitBtn.click();
  }

  async clickOnSignUpBtn() {
    await this.signUpBtn.click();
  }
};
