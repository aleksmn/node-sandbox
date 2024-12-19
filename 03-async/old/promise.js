console.log("Start");

function longOperation(waitMs = 2000) {
  console.log("Waiting for", waitMs, "milliseconds");

  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log("Async longOperation completed");
       let success = false;
       if (success) {
         return resolve(1024);
       } else {
	 return reject("Rejected!")
       }
    }, waitMs);
  });
}


longOperation(1000)
  .then((res) => {
    console.log("Result:", res);
    return res / 2;
  })
  .then((res2) => {
    console.log("Result2:", res2);
  })
  .catch((err) => {
    console.error(err);
  })
  .finally((res) => {
    console.log("All operations finished.");
  });

console.log("End");
