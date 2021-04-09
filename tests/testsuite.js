var webdriver = require('selenium-webdriver');

async function runSampleTest () {
  let driver;
  try {
    driver = new webdriver.Builder().
      withCapabilities({
        'browserName': 'chrome',
        'platform': 'WIN10',
        'version': 'latest',
        'client_key': process.env.TESTINGBOT_KEY,
        'client_secret': process.env.TESTINGBOT_SECRET,
        'name': (process.env.CI_JOB_ID ? ("GitLab Build " + process.env.CI_JOB_ID) : "Simple Test")
      }).
      usingServer("https://" + process.env.TESTINGBOT_KEY + ":" + process.env.TESTINGBOT_SECRET +
                  "@hub.testingbot.com/wd/hub").
      build();

    await driver.get('https://www.google.com');

    var title = await driver.getTitle();
    console.log("title is: " + title);
  } catch (e) {
    console.log(e);
  } finally {
    if (driver) {
      await driver.quit();
    }
  }
}
runSampleTest();