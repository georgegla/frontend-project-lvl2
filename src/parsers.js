import yaml from 'js-yaml';
import { getFileExt, getFileContent } from './file-utils.js';

const parsingFiles = (filePath) => {
  const format = getFileExt(filePath);
  const data = getFileContent(filePath);

  let parse;

  const parsers = { yml: yaml.load, yaml: yaml.load, json: JSON.parse };

  if (format === 'json') {
    parse = parsers.json(data);
  } else if (format === 'yml' || format === 'yaml') {
    parse = parsers.yaml(data);
  } else {
    throw new Error(`Ext '${data}' not found!`);
  }

  return parse;
};
export default parsingFiles;
