import process, { stdout } from 'process';
import { getCurrFolder } from './currently-folder.js'

function getName() {
  const args = process.argv.slice(2);
  const nameArg = args.find((elem) => elem.match(/--username=/));

  if(!nameArg) {
    return
  }

  return nameArg.replace('--username=', '');
};

function makeGreeting() {
  const greetingName = name ? name : 'noName'
  stdout.write(`Welcome to the File Manager, ${greetingName}!\n`);
  stdout.write(`${getCurrFolder()}\n`);
}

function makeFarewell() {
  const greetingName = name ? name : 'noName'
  console.log(`Thank you for using File Manager, ${greetingName}!\n`);
}

const name = getName();

export { makeGreeting,  makeFarewell}