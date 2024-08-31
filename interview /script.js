function removeDuplicate(arr) {
  let seen = {};

  let result = [];

  for (let i = 0; i < arr.length; i++) {
    let value = arr[i];

    if (!seen[value]) {
      result.push(value);
      seen[value] = true;
    }
  }
  return result;
}

input = [2, 1, -1, 2, 3, 3];
let output = removeDuplicate(input);

console.log(output);

