import { cd } from './navigation/cd.js';
import { up } from './navigation//up.js';
import { ls } from './navigation/ls.js';
import { cat } from './operation-with-files/cat.js';
import { add } from './operation-with-files/add.js';
import { rn } from './operation-with-files/rn.js';
import { cp } from './operation-with-files/cp.js';
import { mv } from './operation-with-files/mv.js';
import { rm } from './operation-with-files/rm.js';
import { osService as os } from './operation-system/os.js';
import { hash } from './hash/hash.js';

export const commands = {
  cd,
  up,
  ls,
  cat,
  add,
  rn,
  cp,
  mv,
  rm,
  os,
  hash,
}