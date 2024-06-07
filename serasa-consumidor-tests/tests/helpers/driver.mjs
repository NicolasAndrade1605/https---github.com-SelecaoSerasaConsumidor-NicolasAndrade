import { Builder } from 'selenium-webdriver';
import 'chromedriver';

export function getDriver() {
    return new Builder().forBrowser('chrome').build();
}

export default getDriver;
