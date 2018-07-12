import { AppPage } from './app.po';
import { browser } from '../../node_modules/protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();

    browser.sleep(3000);
    expect(page.getParagraphText()).toEqual('Book Rating');
  });
});
