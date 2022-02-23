#!/usr/bin/env node

import _ from 'lodash';
import getFilePath from './index.js';
import parsingFiles from './parsers.js';

const genDiff = (filepath1, filepath2) => {
  const existFilePath1 = getFilePath(String(filepath1));
  const existFilePath2 = getFilePath(String(filepath2));

  if (!existFilePath1) {
    return `incorrect ${existFilePath1}`;
  }

  if (!existFilePath2) {
    return `incorrect ${existFilePath2}`;
  }

  const object1 = parsingFiles(existFilePath1);
  const object2 = parsingFiles(existFilePath2);

  const keys = _.sortBy(_.union(_.keys(object1), _.keys(object2)));

  const diff = keys.reduce((acc, key) => {
    const value1 = _.get(object1, key);
    const value2 = _.get(object2, key);

    if (value1 === value2) {
      return [...acc, [`  ${key}`, value1]];
    }

    return [
      ...acc,
      [`- ${key}`, value1],
      [`+ ${key}`, value2],
    ];
  }, [])
    .filter(([, value]) => value !== undefined)
    .map(([key, value]) => `  ${key}: ${value}`).join('\n');

  return `{\n${diff} \n}`;
};

export default genDiff;
