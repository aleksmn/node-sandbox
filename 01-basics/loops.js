
const whileLoop = () => {
	let counter = 0;
	while (counter <= 16) {
		console.log(counter, 2**counter);
		counter += 1;
	}
};

export { whileLoop };
