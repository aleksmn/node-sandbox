console.log("Start");

function longOperation(waitMs = 2000) {
  console.log("Waiting for", waitMs, "milliseconds");
  return setTimeout(function () {
    console.log("Async longOperation completed");
  }, waitMs);
}

let result = longOperation();

console.log("End");
