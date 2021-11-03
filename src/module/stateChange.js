const stateChange = (e, list, lists) => {
  if (e.target.checked) {
    list.completed = true;
  } else {
    list.completed = false;
  }
  localStorage.setItem('to-do', JSON.stringify(lists));
};

export default stateChange;
