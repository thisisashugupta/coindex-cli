import https from "https";
import KeyManager from "../lib/KeyManager.js";
import colors from "colors";

const check = {
  async price(cmd) {
    try {
      let keyManager = new KeyManager();
      const key = keyManager.getKey();

      console.log(cmd.coin, cmd.cur);

      // make an api request to fetch data
      let options = {
        method: "GET",
        hostname: "rest.coinapi.io",
        path: `/v1/exchangerate/${cmd.coin}/${cmd.cur}`,
        headers: { "X-CoinAPI-Key": key },
      };

      let data = "";

      const request = https.request(options, (response) => {
        response.on("data", (chunk) => {
          data += chunk;
        });

        response.on("end", () => {
          // console.log("Body", JSON.parse(data));
          const jsonData = JSON.parse(data);
          console.log(`\n Timestamp: ${jsonData.time.red}\n 1 ${
            jsonData.asset_id_base.yellow
          } = ${jsonData.rate.toString().green} ${
            jsonData.asset_id_quote.yellow
          }
        `);
        });
      });

      request.end();
    } catch (error) {
      console.error(error.message.red);
    }
  },
};

export default check;
