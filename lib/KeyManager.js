// A library to get, set and delete keys. we will use these inside the actions in key.js
import Configstore from "configstore";
import pkg from "../package.json" assert { type: "json" };

class KeyManager {
  constructor() {
    this.conf = new Configstore(pkg.name);
  }

  setKey(key) {
    this.conf.set("apiKey", key);
    return key;
  }

  getKey() {
    const key = this.conf.get("apiKey");

    if (!key) {
      throw new Error("No apiKey found - Get a Key at https://www.coinapi.io/");
    }

    return key;
  }

  deleteKey() {
    const key = this.conf.get("apiKey");

    if (!key) {
      throw new Error(
        "No apiKey found - Get your API Key at https://www.coinapi.io/"
      );
    }

    this.conf.delete("apiKey");
    console.log("API Key deleted");
    return;
  }
}

export default KeyManager;
