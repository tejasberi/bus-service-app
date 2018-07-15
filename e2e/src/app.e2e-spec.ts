import { AppPage } from './app.po';
import { browser, by, element } from 'protractor';


// Adding some sample e2e tests to showcase capabilities

describe('Bus service app', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display app name in the navigation bar', () => {
    page.navigateTo();
    expect(page.getNavHeader()).toEqual('Bus Reports');
  });

  it('should display the available bus services', () => {
    page.navigateTo();
    expect(page.getServiceNames()).toEqual(['Sydney Buses - 25/09/2015', 'Westbus - 25/09/2015']);
  });

  it('should open the bus service details on click of the service header', () => {
    page.navigateTo();
    page.getOpenChevron().click();
    browser.driver.sleep(1000);
    expect(page.getServiceTable()).not.toBeNull();
  });

});
