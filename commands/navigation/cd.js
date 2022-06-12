import { getCurrFolder } from "../../shared/currently-folder.js";

const cd = async function(dist) {
  try {
    await process.chdir(dist);
    return '';
  } catch(err) {
    console.error('Operation failed');
  } 
}

export { cd };