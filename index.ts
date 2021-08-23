import { ifElse } from "./src/ifElse";

function main() {
  const isEven = (x: number) => x % 2 === 0;
  const ifEvenDo = ifElse(isEven, [
    (y) => console.log(`${y} is not even`),
    (x) => console.log(`${x} is even`),
  ]);
  ifEvenDo(4);
}
main();
