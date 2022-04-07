import path, { dirname } from 'path';
import { test, expect } from '@jest/globals';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
// eslint-disable-next-line import/no-named-as-default-member
import genDiff from '../src/genDiff.js';
// const { test, expect } = require('jest/globals')

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

test.each([
  {
    file1: getFixturePath('file1.json'),
    file2: getFixturePath('file2.json'),
    format: 'stylish',
    expected: readFileSync(getFixturePath('result-stylish.txt')).toString(),
  },

  {
    file1: getFixturePath('file1.yml'),
    file2: getFixturePath('file2.json'),
    format: 'plain',
    expected: readFileSync(getFixturePath('result-plain.txt')).toString(),
  }])('genDiff', ({
  file1, file2, format, expected,
}) => {
  expect(genDiff(file1, file2, format)).toEqual(expected);
});
// node __tests__/genDiff.test.js
// Если все хорошо, код молча выполнится.
// Если есть ошибка, то будет выведено сообщение об ошибке.
// npx jest --coverage
