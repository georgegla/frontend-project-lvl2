import _ from 'lodash';

import yaml from 'js-yaml';

const parsingFiles = (format, data) => {
  const parsers = { yml: yaml.load, yaml: yaml.load, json: JSON.parse };

  if (!_.has(parsers, format)) {
    throw new Error(`Ext '${data}' not found!`);
  }
  return parsers[format](data);
};
export default parsingFiles;
