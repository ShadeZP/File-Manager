import { unlink } from 'fs/promises';

async function rm(path) {
  try {
    await unlink(path);
    return 'Operation done';
  } catch {
    return 'Operation failed';
  }
}

export { rm };