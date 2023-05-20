const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const fruitsEl = document.querySelector('ul');

// let list = [];
// ingredients.forEach(function(option) {
//  let li = document.createElement('li');
//   li.textContent = option;
//   list.push(li);
//   });

// fruitsEl.append(...list);

const elements = ingredients.map(option => {
  const liElement = document.createElement('li');
  liElement.textContent = option;
  liElement.classList.add('item');

  return liElement;
})

fruitsEl.append(...elements);