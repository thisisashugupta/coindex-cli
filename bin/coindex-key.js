#!/usr/bin/env node
import { program } from "commander";
import key from "../commands/key.js";

program
  .command("set")
  .description("Set API Key -- Get your API key at https://www.coinapi.io/")
  .action(key.set);

program.command("show").description("show API Key").action(key.show);

program.command("remove").description("remove API Key").action(key.remove);

program.parse(process.argv);

// console.log(process.argv);
