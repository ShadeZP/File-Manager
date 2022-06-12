import { createReadStream, createWriteStream, unlink } from 'fs';
import { pipeline } from 'node:stream'
import { resolve } from 'path';

const mv = async function(path, pathToCopy) {
  const promise = new Promise((resolve, reject) => {
    const readStream = createReadStream(path);
    const writeStream = createWriteStream(pathToCopy);

    pipeline(
      readStream,
      writeStream,
      (err) => {
        if(err) {
          resolve('Operation failed')
        }
      }
    );

    writeStream.on('close', () => {
      resolve('Operation done');
    })
  })
  .then((res) => {
    unlink(path, () => {
      resolve(res);
    })
  })

  const res = await promise;

  return res;
}

export { mv };