// function sayHello(name) {
//   console.log('Hi ' + name);
// }

// Task-1:rewriting above function into arrow function
const sayHello = name => console.log('Hi ' + name);

// Task-2:function with 2 arguments,0 arguments and return
const sayHello2 = (name, phrase) => console.log(phrase + ' ' + name);
const sayHello3 = () => console.log('Hi Kavitha');
const sayHello4 = name => 'Hi ' + name;

sayHello('Maheswari');
sayHello2('Gouri', 'Hi');
sayHello3();
console.log(sayHello4('Radhika'));

// Task-3:function with default argument
const sayHello5 = (name, phrase = 'Hi') => console.log(phrase + ' ' + name);

sayHello5('Pooja');
sayHello5('Pooja', 'Hello');

//Task-4:unlimited amount of aruguments
function checkInput(cb, ...strings) {
  let hasEmptyText = false;
  for (const text of strings) {
    if (!text) {
      hasEmptyText = true;
      break;
    }
  }
  if (!hasEmptyText) {
    cb();
  }
}

checkInput(
  () => {
    console.log('String argument is not empty!');
  },
  'string1',
  'string2',
  'string3',
  'string4'
);