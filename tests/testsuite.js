"use strict";
var webdriver = require("selenium-webdriver")
 

var capabilities = {
    name : 'Basic Test Example',
    build : '1.0',
    version : '70',
    platform : 'Windows 10',
    browserName : 'Chrome'
};


async function basicExample(){
    try{
        var driver = new webdriver.Builder()
            .withCapabilities(capabilities)
            .build();


        await driver.get('http://google.com');

        await driver.getTitle().then(function(title) {
                    console.log("The title is: " + title)
            });

        driver.quit();
    }

    catch(err){
        handleFailure(err, driver)
    }

}

basicExample();

function handleFailure(err, driver) {
     console.error('Something went wrong!\n', err.stack, '\n');
     driver.quit();
}