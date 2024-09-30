const itemInput = document.getElementById('item-input');
const itemForm = document.getElementById('item-form');
const itemList = document.getElementById('item-list');
const clearBtn = document.getElementById('clear');
const itemFilter = document.getElementById('filter');

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

  //Add li to the DOM
  itemList.appendChild(newItem);
  checkUI();

  itemInput.value = ' ';
});


function removeItem(e){
  if (e.target.parentElement.classList.contains('remove-item')) {
    if (confirm('Estás segur@?')){
      e.target.parentElement.parentElement.remove();
      checkUI();
    }
  }
}

function clearItems() { 
  while (itemList.firstChild){
    itemList.removeChild(itemList.firstChild);
    checkUI();
  } 
}

function checkUI(){
  const items = itemList.querySelectorAll('li');
  if (items.length === 0){
    clearBtn.style.display = 'none';
    itemFilter.style.display = 'none';
  }
}


//Events Listeners
itemList.addEventListener('click', removeItem);
clearBtn.addEventListener('click', clearItems);
checkUI();