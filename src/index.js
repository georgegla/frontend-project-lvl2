import { existsSync } from 'fs';
import { resolve } from 'path';
// import yaml from 'js-yaml';

const getFilePath = (filePath) => {
  if (existsSync(filePath)) {
    return filePath;
  }

  const absolutePath = resolve(process.cwd(filePath));

  return existsSync(absolutePath);
};

export default getFilePath;
