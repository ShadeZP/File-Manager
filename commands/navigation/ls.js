import { readdir } from 'fs/promises'

const ls = async function(path) {
  try {
    const res = await readdir(path);
    return res;
  } catch(err) {
    return 'Operation failed';
  }
}

export { ls };