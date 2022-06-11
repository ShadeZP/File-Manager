import { homedir } from 'node:os';

const initHomeDir = function() {
  process.chdir(homedir());
}

export { initHomeDir };