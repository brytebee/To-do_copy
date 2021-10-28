import { editItem } from './edit.js';
import { stateChange, visualChange } from './stateChange.js';

const root = document.querySelector('#root');

const display = (array) => {
  root.textContent = '';
  array.forEach((item) => {
    const ul = document.createElement('ul');
    const li = document.createElement('li');

    const listDiv = document.createElement('div');
    listDiv.className = 'list d-flex parent-flex b-border';

    const descriptionDiv = document.createElement('div');
    descriptionDiv.className = 'child-flex-large';

    const check = document.createElement('input');
    check.type = 'checkbox';
    check.className = 'check';

    const descriptionSpan = document.createElement('span');
    descriptionSpan.setAttribute('contenteditable', true);
    descriptionSpan.className = 'description';
    descriptionSpan.textContent = item.description;

    const iconsDiv = document.createElement('div');
    iconsDiv.className = 'child-flex-small';

    const optionsSpan = document.createElement('span');
    optionsSpan.className = 'options';
    optionsSpan.innerHTML = '<i class="fas fa-ellipsis-v"></i>';

    const trashSpan = document.createElement('span');
    trashSpan.className = 'trash hidden';
    trashSpan.innerHTML = '<i class="fa fa-trash" aria-hidden="true"></i>';

    const taskCompleteSpan = document.createElement('span');
    taskCompleteSpan.className = 'done hidden';
    taskCompleteSpan.innerHTML = '<i class="fas fa-check"></i>';

    descriptionSpan.addEventListener('keyup', () => editItem(array, item, descriptionSpan));

    check.addEventListener('change', (e) => {
      stateChange(e, item, array);
      visualChange(e, li, optionsSpan, taskCompleteSpan, array);
    });

    if (item.completed) {
      check.checked = true;
      li.classList.add('strike-out');
    }

    descriptionDiv.append(check, descriptionSpan);
    iconsDiv.append(optionsSpan, trashSpan, taskCompleteSpan);

    listDiv.append(descriptionDiv, iconsDiv);

    li.appendChild(listDiv);
    ul.append(li);
    root.append(ul);
  });
};

export default display;