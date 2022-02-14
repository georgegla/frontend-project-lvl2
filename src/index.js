import { existsSync, readFileSync } from 'fs';
import { resolve } from 'path';

const getFilePath = (filePath) => {
  if (existsSync(filePath)) {
    return filePath;
  }

  const absolutePath = resolve(process.cwd(filePath));

  return existsSync(absolutePath);
};

const unpackingFiles = (filePath) => {
  const data = readFileSync(getFilePath(filePath), 'utf-8');

  const object = JSON.parse(data.toString());

  return object;
};

export { unpackingFiles, getFilePath };
