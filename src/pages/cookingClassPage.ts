import { Page } from '@playwright/test';

export class CookingClassPage {
  constructor(private page: Page) {}

  async navigateToClass(classId: string) {
    await this.page.goto(`/cooking-classes/${classId}`);
  }

  async getLocation() {
    return await this.page.innerText('.location');
  }
}
