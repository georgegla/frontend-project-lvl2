import yaml from 'js-yaml';
import { getFileExt, getFileContent } from './file-utils.js';

const parsingFiles = (filePath) => {
  const format = getFileExt(filePath);
  const data = getFileContent(filePath);

  const parsers = { yml: yaml.load, yaml: yaml.load, json: JSON.parse };

  if (format === 'json') {
    return parsers.json(data);
  }
  if (format === 'yml' || format === 'yaml') {
    return parsers.yaml(data);
  }
  throw new Error(`Ext '${data}' not found!`);
};
export default parsingFiles;
