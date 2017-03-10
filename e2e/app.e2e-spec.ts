import { AngnewmaterialPage } from './app.po';

describe('angnewmaterial App', function() {
  let page: AngnewmaterialPage;

  beforeEach(() => {
    page = new AngnewmaterialPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
