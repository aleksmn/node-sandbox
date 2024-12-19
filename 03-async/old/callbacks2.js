console.log("Start");


function longOperation(waitMs=5000) {
	console.log("Waiting for", waitMs, "ms");
	return setTimeout(function () {
		console.log("Async operation completed")
	}, waitMs)
}



longOperation();


console.log("End")

