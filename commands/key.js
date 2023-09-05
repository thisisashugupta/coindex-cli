const KeyManager = require("../");

const key = {
  set() {
    console.log(`Hello from set`);
  },
  remove() {
    console.log(`Hello from remove`);
  },
  show() {
    console.log(`Hello from show`);
  },
};

module.exports = key;
