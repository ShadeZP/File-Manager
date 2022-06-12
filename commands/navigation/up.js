import { getCurrFolder } from "../../shared/currently-folder.js";

const up = async function() {
  await process.chdir('../');
  return;
};

export { up };
