import { AngularRosterPage } from './app.po';

describe('angular-roster App', () => {
  let page: AngularRosterPage;

  beforeEach(() => {
    page = new AngularRosterPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
