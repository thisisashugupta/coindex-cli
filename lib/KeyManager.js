const Configstore = require("configstore");
const pkg = require("../package.json");

class KeyManager {
  constructor() {
    this.conf = new Configstore(pkg.name);
  }

  setKey(key) {
    this.conf.set("apiKey", key);
    return key;
  }

  getKey(key) {
    const key = this.conf.get("apiKey", key);

    if (!key) {
      throw new Error(
        "No apiKey found - Get your API Key at https://nomics.com"
      );
    }

    return key;
  }

  deleteKey(key) {
    const key = this.conf.get("apiKey", key);

    if (!key) {
      throw new Error(
        "No apiKey found - Get your API Key at https://nomics.com"
      );
    }

    this.conf.delete("apiKey");

    return;
  }
}

module.exports = KeyManager;
