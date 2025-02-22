const { expect } = require("@playwright/test");

exports.ContactListPage = class ContactListPage {
  constructor(page) {
    if (!page) {
      throw new Error(
        "🚨 Error: Page is undefined in ContactListPage constructor!"
      );
    }
    this.page = page;

    const elements = [
      (this.pageTitle = page.getByText("Contact List")),
      (this.addNewContactBtn = page.getByTestId("add-contact")),
      (this.logoutBtn = page.getByTestId("logout")),
      (this.nameLabel = page.getByText("Name")),
      (this.birthdateLabel = page.getByText("Birthdate")),
      (this.emailLabel = page.getByText("Email")),
      (this.phoneLabel = page.getByText("Phone")),
      (this.addressLabel = page.getByText("Address")),
      (this.cityLabel = page.getByText("City")),
      (this.countryLabel = page.getByText("Country")),
    ];
    this.elements = elements;
  }

  async pageIsDisplayed() {
    await expect(this.pageTitle).toBeVisible(),
      await expect(this.addNewContactBtn).toBeVisible(),
      await expect(this.logoutBtn).toBeVisible(),
      await expect(this.nameLabel).toBeVisible(),
      await expect(this.birthdateLabel).toBeVisible(),
      await expect(this.emailLabel).toBeVisible();
  }

  async clickOnAddNewContactBtn() {
    await this.addNewContactBtn.click();
  }

  async clickOnLogoutBtn() {
    await this.logoutBtn.click();
  }

  async contactDataIsDisplayedInTable(data) {
    await expect(
      this.page.locator(
        `xpath=//tr[@class= "contactTableBodyRow"]//td[contains(text(), "${data}")]`
      )
    ).toBeVisible();
  }

  async contactDataIsNotDisplayedInTable(data) {
    await expect(
      this.page.locator(
        `xpath=//tr[@class= "contactTableBodyRow"]//td[contains(text(), "${data}")]`
      )
    ).not.toBeVisible();
  }

  async clickOnContactInTable(name) {
    await this.page
      .locator(
        `xpath=//tr[@class= "contactTableBodyRow"]//td[contains(text(), "${name}")]`
      )
      .click();
  }
};
