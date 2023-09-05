#!/usr/bin/env node
const program = require("commander");
const key = require("../commands/key.js");

program
  .command("set")
  .description("Set API Key -- Get your API key at https://nomics.com")
  .action(key.set);

program.command("show").description("show API Key").action(key.show);

program.command("remove").description("remove API Key").action(key.remove);

program.parse(process.argv);

// console.log(process.argv);
