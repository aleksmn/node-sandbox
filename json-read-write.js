const config = {ip:'123.456.123.78', port:5555}

console.log(JSON.stringify(config))
console.log(JSON.parse(JSON.stringify(config)))
