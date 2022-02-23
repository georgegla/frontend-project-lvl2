import yaml from 'js-yaml';
import path from 'path';
import { readFileSync } from 'fs';
import getFilePath from './index.js';

const parsingFiles = (filePath) => {
  // const data = readFileSync(getFilePath(filePath), 'utf-8');
  // const configPath = 'path/to/eslint';
  const format = path.extname(filePath);
  const data = readFileSync(getFilePath(filePath), 'utf-8');

  let parse;

  if (format === '.json') {
    parse = JSON.parse(data);
  } else if (format === '.yml' || format === '.yaml') {
    parse = yaml.load(data);
  }
  return parse;
};
export default parsingFiles;
