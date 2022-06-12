import { createHash } from 'crypto';
import { createReadStream } from 'fs';
import { pipeline } from 'stream';

async function hash(path) {
  const promise = new Promise((resolve, reject) => {
    const readStream = createReadStream(path);
    const hash = createHash('sha256');
    hash.setEncoding('hex');
  
    readStream.on('end', () => {
      hash.end();
      resolve (hash.read());
    })

    pipeline(
      readStream,
      hash,
      (err) => {
        if(err) {
          resolve('Operation failed');
        }
      },
    )
  })
  
  const res = await promise;
  return res;
}

export { hash }