


const arr = [
  { x: 1, y: 2, q: 'hello'},
  { x: 1, y: 3, q: 'hello'},
  { x: 1, z: 11, q: 'hello'}
];
console.log(all(arr, 'x', 1));//true
console.log(all(arr, 'y', 1));//false
console.log(all(arr, 'q', 'hello'));//true
