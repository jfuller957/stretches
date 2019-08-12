console.clear();

// 7-30-19
// const pairs = function(obj) {
//   return Object.entries(obj);
// }
// console.log(pairs({foo: 'bar', bazz: 'quq'}));//[ [ 'foo', 'bar' ], [ 'bazz', 'quq' ]
// console.log(pairs({x: 3, y: 4, z: 9}));
// //[ [ 'x', 3 ], [ 'y', 4 ], [ 'z', 9 ] ]


// 7-31-19
//randomList returns an array of length count of random numbers between 0 and max
// const randomList = (obj) => {
//   let output = [];
//   for(let i = obj.count; i>0; i--) {
//     output.push(Math.floor(Math.random() * obj.max) + 1);
//   }
//   return output;
// }
// console.log(randomList({
//   max: 3,
//   count: 5
// }));//sample output [ 3, 2, 2, 1, 1 ]
// console.log(randomList({
//   max: 1,
//   count: 10
// }));//sample output[ 1, 0, 0, 1, 0, 1, 0, 0, 1, 1 ]


const sumByKey = function(arr, loc){
  const x = loc;
  let total = 0;
  for(let i = 0; i < arr.length; i++ ){
    if(arr[i].x) {
      total+= arr[i][x];
    }
  }
  return total;
}

console.log(sumByKey([
  {
    x: 2,
    y:3
  }
], 'x'));//2

console.log(sumByKey([
  {
    x: 2,
    y: 3
  },
  {
    y: 4
  },
  {
    x: 1
  }
], 'x'));//3

console.log(sumByKey([
  {
    x: 2,
    y: 3
  },
  {
    y: 4
  },
  {
    x: 1
  }
], 'y'));//7
