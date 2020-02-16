var cucumberReportDirectory = 'Execution_report';
var timeStampFormat= 'MM-DD_YYYY_hh-mm-ss_A_X';
var moment = require('moment');
var timeStamp=moment().format(timeStampFormat);
var jsonReportFile = cucumberReportDirectory + '/log.json';
var CucumberHtmlReport = require('cucumber-html-reporter');
var logPath='Execution_report/';
var fs= require('fs');
var options = {
    theme:'bootstrap',
    jsonFile: logPath+'cucumber_report' +timeStamp+'.json',
        output: logPath+timeStamp+'cucumber_report.html',
        reportSuiteAsScenarios: true,
        scenarioTimestamp: true,
        launchReport: true,
        consolidateAll: true,
        consolidate: true,
        metadata: {
            "App Version":"0.3.2",
            "Test Environment": "STAGING",
            "Browser": "Chrome  54.0.2840.98",
            "Platform": "Windows 10",
            "Parallel": "Scenarios",
            "Executed": "Remote"
        }
   };
exports.config={


  onComplete: function () {
    
    CucumberHtmlReport.generate(options);
  },

//seleniumSessionId:"34e28169778ff5bbd42d0059c2dcd072",
// seleniumServerJar:"./node_modules/webdriver/lib",
// seleniumAddress: "http://localhost:4444/wd/hub",
chromeDriver:'./node_modules/chromedriver/bin/chromedriver',
geckoDriver:'./node_modules/geckodriver/bin/geckodriver',
directConnect: true,
getPageTimeout:60000,
ignoreUncaughtExceptions: true,
framework: 'custom',
baseURL: 'http://localhost:35171/',
frameworkPath: require.resolve('protractor-cucumber-framework'),
specs:['./features/*.feature' ],
 cucumberOpts: {
 tags: ['@first'],
 //'dry-run':true,
 require: ['./outputjs/*/*.js'
           
],
 format: 'json:' + logPath + 'cucumber_report' + timeStamp+'.json',
 isVerbose:true,
 includeStackTrace:true
  },

//   capabilities: {
//    'browserName': 'chrome',
//    'platform': 'Any',
//    'version': 'Any',

//     chromeOptions:{
//     'args': ['--safe-mode',
//             //'--headless',
//             '--incognito'   
//         ]

//     },
//    },
multiCapabilities:[{
    'browserName': 'firefox',
},
{'browserName': 'chrome',
chromeOptions:{
        'args': ['--safe-mode',
                //'--headless',
                '--incognito'   
            ]
    
        },}
],
maxSessions: 1,
//   capabilities: {
//    'browserName': 'firefox',
//    'platform': 'Any',
//    'version': 'Any',

//     // chromeOptions:{
//     // 'args': ['--safe-mode',
//     //         //'--headless',
//     //         '--incognito'   
//     //     ]

//     // },
//    },
   onPrepare: function () {
    
           browser.manage().window().maximize(); // maximize the browser before executing the feature files
           browser.waitForAngularEnabled(false);
       }

  };