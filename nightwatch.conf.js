module.exports = {
  "src_folders": ["tests"],
  "output_folder": "tests/reports",
  "custom_commands_path": "",
  "custom_assertions_path": "",
  "page_objects_path": "",
  "globals_path": "globals",

  "selenium" : {
    "start_process" : true,
    "server_path" : "./node_modules/selenium-server-standalone-jar/jar/selenium-server-standalone-3.0.1.jar",
    "log_path" : "",
    "host" : "127.0.0.1",
    "port" : 4444,
    "cli_args" : {
      "webdriver.chrome.driver" : require('chromedriver').path,
      "webdriver.gecko.driver" : "",
      "webdriver.edge.driver" : ""
    }
  },

  "test_settings": {
    "default": {
      "launch_url": "http://localhost",
      "selenium_port": 4444,
      "selenium_host": "localhost",
      "silent": true,
      "desiredCapabilities": {
        "browserName" : "phantomjs",
        "javascriptEnabled" : true,
        "acceptSslCerts" : true,
        "phantomjs.binary.path" : "./node_modules/phantomjs/lib/phantom/bin/phantomjs"
      }
    }
  }
}
