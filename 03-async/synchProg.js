console.log("Start");

function longOperation(waitMs = 2000) {
  // long operation 
  console.log("Waiting for", waitMs, "milliseconds");
  let waitTill = new Date(new Date().getTime() + waitMs);
  while (waitTill > new Date()) {
    // empty loop
  }
  console.log("longOperation completed");
  return waitMs;
}

let result = longOperation(5000);
console.log("Result:", result);

console.log("End");
