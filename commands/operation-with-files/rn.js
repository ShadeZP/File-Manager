import { rename } from 'fs/promises'

const rn = async function(path, newName) {
  const newPath = path.split('/').slice(0, -1).concat([newName]).join('/')
  try {
    await rename(path, newPath);
    return 'Operation done';
  } catch {
    return 'Operation failed';
  }
}

export { rn };