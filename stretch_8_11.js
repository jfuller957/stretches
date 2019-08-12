const obj = {
  foo: 'bar',
  bazz: 'quq',
  fizz: 1
};

/*generateString count returns:
  new object
  with all the properties of the passed in object
  plus a property of stringCount which is the total length of all values in the object which are strings.
*/

let generateWithStringCount = function(obx) {
  let stringCount = 0;
  for(key in obx){
    if(obx.hasOwnProperty(key)){
      let value = obx[key];
      if(value.length > 0) {
        stringCount += value.length;
      }
    }
  }
  console.log(stringCount);
  obx.stringCount = stringCount;
  return obx;
}

const obj1 = generateWithStringCount(obj);

console.log(obj1);
console.log(obj1 === obj);
