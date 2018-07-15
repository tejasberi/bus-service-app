import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getNavHeader() {
    return element(by.css('a.navbar-brand')).getText();
  }

  getServiceNames() {
    return element.all(by.css('span.bus-service-title')).getText()
  }

  getOpenChevron() {
    return element.all(by.css('.bus-service-container h3'));
  }

  getServiceTable() {
    return element(by.css('table.table'));
  }
}
