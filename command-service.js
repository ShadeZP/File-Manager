import { Transform } from 'stream';
import { commands } from './commands/index.js';
import { getCurrFolder } from './shared/currently-folder.js'

const commandService = new Transform({
  transform(chunk, encoding, callback) {
    const { command, firstArg, secondArg } = JSON.parse(chunk);

    async function getRes() {
      const res = await commands[command](firstArg, secondArg);
      const message = res ? `${res}\n${getCurrFolder()}\n` : `${getCurrFolder()}\n`
      callback(null, message);
    };

    getRes();
  }
});

export { commandService }