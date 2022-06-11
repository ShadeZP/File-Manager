import { appendFile } from 'fs/promises';

const add = async function(fileName) {
  const path = `${process.cwd()}\\${fileName}`;
  try {
    await appendFile(path, '');
    return 'Operation done';
  } catch {
    return 'Operation failed';
  }
}

export { add };