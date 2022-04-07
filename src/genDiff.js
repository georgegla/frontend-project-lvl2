#!/usr/bin/env node

import getFilePath from './file-utils.js';
import parsingFiles from './parsers.js';
import buildAST from './buildAST.js';
import genToFormat from './formatters/index.js';

const genDiff = (filepath1, filepath2, formatName = 'stylish') => {
  const existFilePath1 = getFilePath(filepath1);
  const existFilePath2 = getFilePath(filepath2);

  const parserData1 = parsingFiles(existFilePath1);
  const parserData2 = parsingFiles(existFilePath2);

  const astTree = buildAST(parserData1, parserData2);

  return genToFormat(astTree, formatName);
};

export default genDiff;
