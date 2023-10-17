import { TYPE_lOG, TYPE_WARN,TYPE_ERR} from "./constants.js";
/*Nếu không muốn dùng destructuring thì có thể sd cú pháp sau :
  import *as constants from './constants.js';
  as : alias (bí danh) nó sẽ import tất cả các tham số , func trong 
  file constants.js
*/ 
import log from "./logger.js";
console.log(log("notification",TYPE_WARN));