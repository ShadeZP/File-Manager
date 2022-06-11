import {stdout, stdin} from 'process';
import { pipeline } from 'stream';
import { makeGreeting } from './shared/greeting.js';
import { inputFilter } from './filter-input.js';
import { commandService } from './command-service.js';
import { initHomeDir } from './shared/home-dir.js'

initHomeDir();
makeGreeting();


pipeline(
  stdin,
  inputFilter,
  commandService,
  stdout,
  (err) => {
    console.log('err', err);
}
)