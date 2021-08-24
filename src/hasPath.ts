import { NonEmptyArray } from "fp-ts/NonEmptyArray";
/**
 * returns true if path for [key1,key2,key3] exists in obj
 * @param props {NonEmptyArray<string>}
 * @returns {boolean}
 */
export function hasPath(
  props: NonEmptyArray<string | number>
): (obj: any) => boolean {
  return function (obj: any): boolean {
    let idx = 0;
    let val = obj;
    if (_filterFalsy(props).length === 0) return false; //filter out empty strings
    while (idx < props.length) {
      let key = props[idx];
      if (val !== undefined && _hasKey(key, val)) {
        val = val[key]; //next iteration starts from the found nested object
        idx += 1;
      } else {
        return false;
      }
    }
    return true;
  };
}
function _hasKey(key: string | number, obj: any) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}
function _filterFalsy(array: Array<any>) {
  return array.filter(Boolean);
}
