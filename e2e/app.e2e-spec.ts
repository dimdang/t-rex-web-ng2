import { TRexWebNg2Page } from './app.po';

describe('t-rex-web-ng2 App', () => {
  let page: TRexWebNg2Page;

  beforeEach(() => {
    page = new TRexWebNg2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
