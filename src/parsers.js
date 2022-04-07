import yaml from 'js-yaml';
import path from 'path';
import { readFileSync } from 'fs';
import getFilePath from './file-utils.js';

const parsingFiles = (filePath) => {
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
