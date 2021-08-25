import { hasPath } from "../hasPath";

function hasProp(prop: string) {
  return function (obj: any): boolean {
    return hasPath([prop])(obj);
  };
}
export default hasProp