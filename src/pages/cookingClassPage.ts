import { Page } from '@playwright/test';

export class CookingClassPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigateToClass(classId: string) {
    // Navigates to a specific cooking class page using the class ID
    await this.page.goto(`/cooking-classes/${classId}`);
  }

  async getLocation(): Promise<string> {
    // Retrieves the location text from the page
    return await this.page.innerText('.location');
  }

  async getTitle(): Promise<string> {
    // Retrieves the title of the cooking class
    return await this.page.innerText('.title');
  }

  async getDescription(): Promise<string> {
    // Retrieves the description of the cooking class
    return await this.page.innerText('.description');
  }
}
