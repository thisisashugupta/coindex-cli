#!/usr/bin/env node
import { program } from "commander";
import pkg from "../package.json" assert { type: "json" };

program
  .version(pkg.version)
  .command("key", "Manage API Key -- https://www.coinapi.io/")
  .command("check", "Check Coin Price Info")
  .parse(process.argv);

// console.log(process.argv);
