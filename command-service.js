import { Transform } from 'stream';
import { commands } from './commands/index.js'

const commandService = new Transform({
  transform(chunk, encoding, callback) {
    const { command, firstArg, secondArg } = JSON.parse(chunk);

    async function getRes() {
      const res = await commands[command](firstArg, secondArg);

      callback(null, `${res}\n`);
    };

    getRes();
  }
});

export { commandService }