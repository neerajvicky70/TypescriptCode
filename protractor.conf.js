var cucumberReportDirectory = 'Execution_report';
var jsonReportFile = cucumberReportDirectory + '/log.json';
var logPath='Execution_report/';
var fs= require('fs');
exports.config={


  onComplete: function () {
      var CucumberHtmlReport = require('cucumber-html-report');

      return CucumberHtmlReport.create({
          source: jsonReportFile,
          dest: cucumberReportDirectory,
          title: 'OptiRoute - Protractor Test Run',
          component: new Date().toString()
      }).then(console.log).catch(console.log);
  },
//seleniumAddress: "http://localhost:4444/wd/hub",
//seleniumSessionId:"34e28169778ff5bbd42d0059c2dcd072",
seleniumServerJar:"E:/selenium/selenium-server-standalone-3.141.59.jar",
chromeDriver:'E:/selenium/chromedriver_win32/chromedriver.exe',

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
 format: 'json:' + logPath+"log.json",
 isVerbose:true,
 includeStackTrace:true
  },

  capabilities: {
   'browserName': 'chrome',
   'platform': 'Any',
   'version': 'Any',

    chromeOptions:{
    'args': ['--safe-mode',
             '--headless'   ]

    },
   },

   onPrepare: function () {
    
           browser.manage().window().maximize(); // maximize the browser before executing the feature files
           browser.waitForAngularEnabled(false);
       }

  };