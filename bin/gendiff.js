#!/usr/bin/env node

import { Command } from 'commander';
// eslint-disable-next-line import/no-named-as-default-member
import genDiff from '../src/genDiff.js';

const program = new Command();

program
  .version('0.0.1', '-V, --version', 'output the version number')
  .description('Compares two configuration files and shows a difference.')
  .option('-f, --format <type>', 'output format')
  .arguments('<filepath1> <filepath2>')
  .action((filepath1, filepath2) => {
    console.log(genDiff(filepath1, filepath2, program.opts().format));
  });

program.helpOption('-h, --help', 'output usage information');

program.parse();
