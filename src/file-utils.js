import { existsSync, readFileSync } from 'fs';
import { resolve, extname } from 'path';

export const getAbsolutePath = (filePath) => {
  if (existsSync(filePath)) {
    return filePath;
  }

  const absolutePath = resolve(process.cwd(), filePath);

  return existsSync(absolutePath).toString();
};

export const getFileExt = (filePath) => extname(filePath).slice(1);

export const getFileContent = (filePath) => readFileSync(getAbsolutePath(filePath), 'utf-8');
