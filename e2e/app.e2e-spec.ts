import { WTogglePage } from './app.po';

describe('w-toggle App', () => {
  let page: WTogglePage;

  beforeEach(() => {
    page = new WTogglePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
