import { FundManagerPage } from './app.po';

describe('fund-manager App', () => {
  let page: FundManagerPage;

  beforeEach(() => {
    page = new FundManagerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
