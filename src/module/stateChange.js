const stateChange = (e, list, lists) => {
  if (e.target.checked) {
    list.completed = true;
  } else {
    list.completed = false;
  }
  localStorage.setItem('list', JSON.stringify(lists));
};

const visualChange = (e, list, optionIcon, taskCompleteIcon, trashIcon, lists) => {
  if (e.target.checked) {
    list.classList.add('strike-out');
    optionIcon.classList.add('hidden');
    taskCompleteIcon.classList.remove('hidden');
    trashIcon.classList.remove('hidden');
  } else {
    list.classList.remove('strike-out');
    optionIcon.classList.remove('hidden');
    taskCompleteIcon.classList.add('hidden');
    trashIcon.classList.add('hidden');
  }
  localStorage.setItem('list', JSON.stringify(lists));
};

export { stateChange, visualChange };
