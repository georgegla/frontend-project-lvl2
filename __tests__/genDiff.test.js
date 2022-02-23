import { test, expect, describe } from '@jest/globals';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
// import { readFileSync } from 'fs';

// eslint-disable-next-line import/no-named-as-default-member
import genDiff from '../src/genDiff.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

describe('genDiff.json', () => {
  test('check JSON work', () => {
    const expected = `{
  - follow: false
    host: hexlet.io
  - proxy: 123.234.53.22
  - timeout: 50
  + timeout: 20
  + verbose: true 
}`;
    expect(genDiff(getFixturePath('file1.json'), getFixturePath('file2.json'))).toEqual(expected);
  });
});

describe('gemDiff.yml', () => {
  test('check YML work', () => {
    const expected = `{
  - follow: false
    host: hexlet.io
  - proxy: 123.234.53.22
  - timeout: 50
  + timeout: 20
  + verbose: true 
}`;
    expect(genDiff(getFixturePath('file1.yml'), getFixturePath('file2.yml'))).toEqual(expected);
  });
});

// node __tests__/genDiff.test.js
// Если все хорошо, код молча выполнится.
// Если есть ошибка, то будет выведено сообщение об ошибке.
// npx jest --coverage
