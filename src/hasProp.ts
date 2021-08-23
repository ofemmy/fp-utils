import { hasPath } from "./hasPath";

export function hasProp(prop: string) {
  return function (obj: any): boolean {
    return hasPath([prop])(obj);
  };
}
