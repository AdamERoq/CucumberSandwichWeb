require('chromedriver'); // So executable is available


const cucumber = require("@cucumber/cucumber");

class CustomWorld {
    constructor() {
        this.headless = null;
        this.thrown = false;
    }

    hasThrown() {
        return this.thrown;
    }

    itTrew() {
        this.thrown = true;
    }
}

cucumber.setWorldConstructor(CustomWorld);

