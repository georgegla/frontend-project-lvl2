import { resolve } from 'path';

export const getAbsolutePath = (filePath) => resolve(process.cwd(), filePath);

export default getAbsolutePath;
