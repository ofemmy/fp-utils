import { NonEmptyArray } from "fp-ts/NonEmptyArray";
/**
 * returns true if path for [key1,key2,key3] exists in obj
 * @param props {NonEmptyArray<string>}
 * @returns {boolean}
 */
export function hasPath(props: NonEmptyArray<string|number>) {
  return function (obj: any): boolean {
    let idx = 0;
    while (idx < props.length) {
      let key = props[idx];
      let value = obj[key];
      if (value !== undefined) {
        obj = value; //next iteration starts from the found nested object
        idx++;
      } else {
        return false;
      }
    }
    return true;
  };
}
