// 1. Реализовать возведение в целую степень. (pow(base, exponent) => base**exponent, где base любое число, exponent - натуральное (1, 2, 3) или * целое число(-2, -1, 0, 1, 2)).

const pow = (base, exponent) => {
  if (exponent === 0) {
    return 1;
  }
  return base * pow(base, exponent - 1);
}
console.log(pow(2, 5));

// 2. Реализовать вывод в консоль скобок (// bracketWrapper3(3); // => сразу в консоль)
const bracketWrapper3 = n => {
  if (n === 0) {
    return;
  }
  console.log('('); 
  bracketWrapper3(n - 1);
  console.log(')');
}

bracketWrapper3(3);

// 3. ** Реализовать функцию аналог flat для массивов. (https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/flat)

const arr5 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];

const myFlat = (arr, depth) => {
  if (depth === undefined) {
    depth = 1;
  }
  const newArr = [];
  const myFlatRec = (arr, depth) => {
    if (arr.length === 0) {
      return newArr;
    }
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i]) && depth > 0) {
        myFlatRec(arr[i], depth - 1);
      } else {
        newArr.push(arr[i]);
      }
    }
  }
  myFlatRec(arr, depth);
  return newArr;
}
console.log(myFlat(arr5, 4));
