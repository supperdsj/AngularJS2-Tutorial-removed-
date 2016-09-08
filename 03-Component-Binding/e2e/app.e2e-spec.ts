import { ComponentBindingPage } from './app.po';

describe('component-binding App', function() {
  let page: ComponentBindingPage;

  beforeEach(() => {
    page = new ComponentBindingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
