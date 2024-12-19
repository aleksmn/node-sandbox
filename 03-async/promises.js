console.log("Start");

function longOperation(waitMs=2000) {

	console.log("Waiting...")

	return new Promise((resolve, reject) => {
		setTimeout(function() {
			
			let success = true;
			console.log("Async operation completed");
			if (success) {
				return resolve(1024);
			} else {
				return reject("Long Operation request rejected!");
			}
		}, waitMs)

	});
}


longOperation()
	.then((res) => {
		console.log(res);
		return res;
	})
	.then((res) => {
		console.log(res/2)
	})

	.catch((err) => {
		console.log("Error:", err)
	})
	.finally((res) => {

		console.log("All operations finished!")
	});


console.log("End")
