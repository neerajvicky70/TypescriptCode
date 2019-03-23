import { browser,element,by } from 'protractor';
import * as cucumber from "cucumber";
import { Given,When,Then } from "cucumber";



cucumber.setDefaultTimeout(60000);
Given('I launch url', function(callback) {

browser.get("https://yahoo.com").then(function(){
browser.ignoreSynchronization=true;
browser.sleep(7000).then(function(){
element(by.xpath('//*[@id="uh-signin"]')).click().then(function(){
console.log("sign-in link clicked");
    callback();
});
});
});
});

//
 When('I click on next', function (callback) {
 element(by.xpath('//*[@id="login-signin"]')).click().then(function(){
 console.log("next link clicked");
     callback();
 });
 });
//   When('I enter {string}', function (string,callback) {
//            element(by.xpath('//*[@id="login-username"]')).sendKeys(string).then(function(){
//             console.log("next link clicked");
//                 callback();
//           });
// });
