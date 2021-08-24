import { hasPath } from "./src/hasPath";

function main() {
  let res = hasPath(["a", "b","c"])({a:{b:undefined}});
  console.log({ res });
}
main();
