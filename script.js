const itemInput = document.getElementById('item-input');
const itemForm = document.getElementById('item-form');

itemForm.addEventListener('submit', function (e){
  e.preventDefault();

  const itemList = document.querySelector('ul');

  const itemValue = itemInput.value;

  if (!itemValue) {
    alert('Agrega un producto');
    return;
  } 

  const redBtn = document.createElement('button');
  redBtn.className = 'remove-item btn-link text-red';

  const icon = document.createElement('i');
  icon.className = 'fa-solid fa-xmark';

  redBtn.appendChild(icon);

  const newItem = document.createElement('li');
  newItem.textContent = itemValue;
  newItem.appendChild(redBtn);

  itemList.appendChild(newItem);
});