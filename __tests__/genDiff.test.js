import path, { dirname } from 'path';
import { test, expect } from '@jest/globals';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import genDiff from '../src/genDiff.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

const ext = ['json', 'yml'];

const expectedStylish = readFileSync(getFixturePath('result-stylish.txt')).toString();
const expectedPlain = readFileSync(getFixturePath('result-plain.txt')).toString();
const expectedJson = readFileSync(getFixturePath('result.json')).toString();

test.each(ext)('genDiff', () => {
  const path1 = `file1.${ext[0]}`;
  const path2 = `file2.${ext[1]}`;

  expect(genDiff(getFixturePath(path1), getFixturePath(path2), 'stylish')).toEqual(expectedStylish);
  expect(genDiff(getFixturePath(path1), getFixturePath(path2), 'plain')).toEqual(expectedPlain);
  expect(genDiff(getFixturePath(path1), getFixturePath(path2), 'json')).toEqual(expectedJson);
  expect(genDiff(getFixturePath(path1), getFixturePath(path2))).toEqual(expectedStylish);
});
