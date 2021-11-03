import indexUpdate from './updateIndex.js';
import display from './display.js';
import getFromStorage, { saveInStorage } from './storage.js';

const clearAll = (list) => {
  list = list.filter((task) => task.completed !== true);
  saveInStorage(list);
  list = indexUpdate(getFromStorage());
  display(list);
};

export default clearAll;