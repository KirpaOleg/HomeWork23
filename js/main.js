// const main = document.querySelector('.main');
// console.log(main);

// const box = document.querySelector('.box');
// console.log('box:', box);

// const main = document.getElementById('test');
// console.log(main);


const main = document.querySelector('.main');
main.style.background = 'red';
console.log(main);

const items = document.querySelectorAll('.item');
console.log(items);

const dcub = document.createElement('div');
dcub.style.width='100px';
dcub.style.height='100px';

items.forEach((el) => {
  if (el.innerText === '1')
  el.innerHTML = 'The first', 
  el.style.color = 'blue';
  if (el.innerText === '2')
  el.appendChild(dcub);
  if (el.innerText === '3')
  el.style.fontSize = "18pt"; 
})

  

 
 
