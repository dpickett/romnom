ApplicationWindow = require('./application-window');
app = require('app');

module.exports = class Application {
  constructor(options) {
    this.window = null;
    global.application = this;

    require('crash-reporter').start();

    app.on('window-all-closed', event => {
      app.quit();
    });
    app.on('ready', event => {
      this.openWindow();
    });
  }

  openWindow() {
    let htmlURL = `file://${__dirname}/../main-window/index.html`;
    this.window = new ApplicationWindow(htmlURL, {
      width: 1200,
      height: 800
    });
  }
}
