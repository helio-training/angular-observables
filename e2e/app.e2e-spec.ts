import { AngularObservablesPage } from './app.po';

describe('angular-observables App', function() {
  let page: AngularObservablesPage;

  beforeEach(() => {
    page = new AngularObservablesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
