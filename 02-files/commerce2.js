import fs from "fs";
import path from "path";


const fileName = "cart.json";
const discountPercent = 5;

const inputFilePath = path.join("input", fileName);
const outputFilePath = path.join("output", fileName);


console.log("Processing file:", inputFilePath);
