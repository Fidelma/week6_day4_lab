document.addEventListener('DOMContentLoaded', () => {

  const form = document.querySelector('#new-item-form');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const title = event.target.title.value;
    const author = event.target.author.value;
    const category = event.target.category.value;
    const newListItem = document.createElement('li');
    newListItem.textContent = `${title} ${author} ${category}`;
    const list = document.querySelector('ul');
    list.appendChild(newListItem);
    form.reset();
  })
  const deleteAll = document.querySelector('button');
  const list = document.querySelector('ul');
  deleteAll.addEventListener('click', (event) => {
    while(list.firstChild) {
      list.removeChild(list.firstChild);
    };
  });
})
