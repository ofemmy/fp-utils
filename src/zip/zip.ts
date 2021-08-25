/**
 * zips a tuple of arrays together using the provided function. the length of resulting array is determined by the smallest length of the tuple arrays.
 * when partially applied with fn, zip can be used with Array.reduce for any length of tuple arrays
 * Ex:
 * let newFn = zip((x,y)=>x+y)
 * [['a','b','c'],['x','y','z'],['p','q','r']].reduce(newFn) ===>['axp','byq','czr']
 * @param fn
 * @returns
 */

function zip(fn: Function): (arr1: any[], arr2: any[]) => any[] {
  return function (arr1: any[], arr2: any[]) {
    const minLen = Math.min(arr1.length, arr2.length);
    let res = [];
    for (let i = 0; i < minLen; i++) {
      res[i] = fn(arr1[i], arr2[i]);
    }
    return res;
  };
}

export default zip;
