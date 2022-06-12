import { createReadStream, createWriteStream } from 'fs';
import { pipeline } from 'stream/promises';
import { createBrotliCompress } from 'zlib';

async function compress(path, destination) {
  let res = '';

  const readStream = createReadStream(path);
  const writeStream = createWriteStream(destination);
  const brotli = createBrotliCompress();

  readStream.on('error', () => {
    res = 'Operation failed'
  })
    
  try {
    await pipeline(
      readStream,
      brotli,
      writeStream,
    )

    res = 'Operation done';
  } catch {
    res = 'Operation failed';
  }

  return res;
}

export { compress };