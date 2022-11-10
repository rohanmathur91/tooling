import { Greet } from "./Greet";

console.log(Greet({ name: "rohan" }));

const heading = document.createElement("h1");
heading.innerText = Greet({ name: "rohan" });
document.body.append(heading);
