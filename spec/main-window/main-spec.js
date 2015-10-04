Main = require('../../src/main-window/main');

describe("Main", function(){
  beforeEach(function(){
    this.main = new Main();
  });

  it("displays hello", function(){
    expect(this.main.element.textContent).toContain('Hello World')
  });
});
