module.exports = class Main {
  constructor(){
    this.element = document.createElement('h1');
    this.element.textContent = '🎉 Hello World 🎉';
  }

  getElement(){
    return this.element;
  }
}
