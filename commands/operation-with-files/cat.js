import { createReadStream } from 'fs'

const cat = async function(path) {
  const readFileStream = createReadStream(path);

  let promise = new Promise((resolve, reject) => {
    let fileData = ''

    readFileStream.on('data', (data) => {
      if (data) {
        fileData += data;
      }
    });
  
    readFileStream.on('error', (error) => {
      resolve('Operation failed');
    });
  
    readFileStream.on('end', () => {
      resolve(fileData)
    });
  });

  const res = await promise;

  return res;
};

export { cat };