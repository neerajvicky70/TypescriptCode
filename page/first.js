//  var Cucumber= require ('cucumber');
//  Cucumber.setDefaultTimeout(60000);
//  Cucumber.Given('I launch url', function(callback) {

//  browser.get("https://yahoo.com").then(function(){
//  browser.ignoreSynchronization=true;
//  browser.sleep(7000).then(function(){
//  element(by.xpath('//*[@id="uh-signin"]')).click().then(function(){
//  console.log("sign-in link clicked");
//      callback();
//  });
//  });
//  });
//  });

//  //
//   Cucumber.When('I click on next', function (callback) {
//   element(by.xpath('//*[@id="login-signin"]')).click().then(function(){
//   console.log("next link clicked");
//       callback();
//   });
//   });
//    Cucumber.When('I enter {string}', function (string,callback) {
//             element(by.xpath('//*[@id="login-username"]')).sendKeys(string).then(function(){
//              console.log("next link clicked");
//                  callback();
//            });
//  });
