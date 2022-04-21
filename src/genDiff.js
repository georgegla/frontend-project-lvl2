import { readFileSync } from 'fs';
import { extname } from 'path';

import { getAbsolutePath } from './file-utils.js';
import parsingFiles from './parsers.js';
import buildAST from './buildAST.js';
import genToFormat from './formatters/index.js';

export const getFileExt = (filePath) => extname(filePath).slice(1);

export const getFileContent = (filePath) => readFileSync(getAbsolutePath(filePath), 'utf-8');

const genDiff = (filepath1, filepath2, formatName = 'stylish') => {
  const existFilePath1 = getFileContent(filepath1);
  const existFilePath2 = getFileContent(filepath2);

  const format1 = getFileExt(filepath1);
  const format2 = getFileExt(filepath2);

  const parserData1 = parsingFiles(format1, existFilePath1);
  const parserData2 = parsingFiles(format2, existFilePath2);

  const astTree = buildAST(parserData1, parserData2);

  return genToFormat(astTree, formatName);
};

export default genDiff;
