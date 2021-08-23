import { hasPath } from "./src/hasPath";

function main() {
  let res = hasPath(["contact", "names"])({
    contact: {
      name: "John Doe",
      age: 42,
    },
  });
  console.log(res)
}
main();
