import { createReadStream, createWriteStream } from 'fs';
import { pipeline } from 'node:stream'

const cp = async function(path, pathToCopy) {
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
      resolve('Operation done')
    })
  })

  const res = await promise;

  return res;
}

export { cp };