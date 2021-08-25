import { Predicate } from "fp-ts/Predicate";
import { ReadonlyNonEmptyArray as RNEA } from "fp-ts/ReadonlyNonEmptyArray";
type PredicateFnPair<A> = [Predicate<A>, (a: A) => any];
function cond<T>(tupleArgs: RNEA<PredicateFnPair<T>>): (arg: T) => any {
  return function (arg: T) {
    return 8;
  };
}
export default cond;
