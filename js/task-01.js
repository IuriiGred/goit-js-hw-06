const itemElement = document.querySelectorAll('.item');
console.log(`Number of categories: ${itemElement.length}`);

itemElement.forEach(element => {
    console.log(`Category: ${element.firstElementChild.textContent}`)
    console.log(`Elements: ${element.lastElementChild.children.length}`)
});


// const elemFound = document.querySelectorAll('h2');

// const itemElementChildren = document.querySelectorAll('.item ul');

// for (let i = 0; i < itemElement.length; i += 1) {
// console.log(`Category: ${elemFound[i].textContent}  
// Elements: ${itemElementChildren[i].children.length}`);
// }


  