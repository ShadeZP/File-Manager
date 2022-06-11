import { getCurrFolder } from "../../shared/currently-folder.js";

const cd = async function(dist) {
  try {
    await process.chdir(dist);
    return getCurrFolder();
  } catch(err) {
    console.error('Operation failed');
  } 
}

export { cd };