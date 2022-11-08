import chalk from "chalk";
import { suma, multi } from "../ejercicio10/controller.js";

const a = suma(1,2);
console.log(a);
console.log(chalk.bgGreen(multi(4,5)));