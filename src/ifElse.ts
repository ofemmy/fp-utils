import { Predicate } from "fp-ts/Predicate";
/**
 *Takes a unary predicate and applies the [onFalse,onTrue] tuple functions with the provided value depending on whether the predicate returns true or false
 *
 */
export function ifElse<T, U>(
  predicate: Predicate<T>,
  actions: [onFalse: (a: T) => U, onTrue: (a: T) => U]
): (arg: T) => U {
  return (arg: T) => {
    if (predicate(arg)) {
      return actions[1](arg);
    } else {
     return actions[0](arg);
    }
  };
}
