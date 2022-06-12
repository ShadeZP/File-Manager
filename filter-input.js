import { Transform } from 'stream';
import { COMMANDS } from './shared/commands-enum.js';

const inputFilter = new Transform({
  transform(chunk, encoding, callback) {
    const str = chunk.toString().trim();
    const [command, firstArg, secondArg] = str.split(' ');
    const listOfCommands = Object.values(COMMANDS);
    const isCommandExist = listOfCommands.some((item) => item === command);
    const result = JSON.stringify({ command, firstArg, secondArg });

    if(command === '.exit'){
      process.exit();
    }

    if(!isCommandExist) {
      console.error('Invalid input');
      callback(null, '');
    } else {
      callback(null, result);
    }
  }
});

export { inputFilter };