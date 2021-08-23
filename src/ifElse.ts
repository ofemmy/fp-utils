import { Predicate } from "fp-ts/Predicate";
/**
 *Takes a unary predicate and applies the [onFalse,onTrue] tuple functions with the provided value depending on whether the predicate returns true or false
 *
 */
export function ifElse<T>(
  predicate: Predicate<T>,
  actions: [onFalse: (a: T) => void, onTrue: (a: T) => void]
): (arg: T) => void {
  return (arg: T) => {
    if (predicate(arg)) {
      actions[1](arg);
    } else {
      actions[0](arg);
    }
  };
}
