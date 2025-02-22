const { expect } = require("@playwright/test");

exports.ContactDetailsPage = class ContactDetailsPage {
  constructor(page) {
    if (!page) {
      throw new Error(
        "🚨 Error: Page is undefined in ContactListPage constructor!"
      );
    }
    this.page = page;

    const elements = [
      (this.pageTitle = page.getByText("Contact Details")),
      (this.editContactBtn = page.getByTestId("edit-contact")),
      (this.deleteContactBtn = page.getByTestId("delete")),
      (this.returnToContactListBtn = page.getByTestId("return")),
    ];
    this.elements = elements;
  }

  async pageIsDisplayed() {
    await expect(this.pageTitle).toBeVisible(),
      await expect(this.editContactBtn).toBeVisible(),
      await expect(this.deleteContactBtn).toBeVisible(),
      await expect(this.returnToContactListBtn).toBeVisible();
  }

  async clickOnDeleteContactBtn() {
    await this.deleteContactBtn.click();
  }

  async clickOnEditContactBtn() {
    await this.editContactBtn.click();
  }

  async clickOnReturnToContactListBtn() {
    await this.returnToContactListBtn.click();
  }
};
