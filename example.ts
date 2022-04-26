import * as localImport from "./index";
import * as anotherLocalImport from "./typescript";
import * as externalImport from "eslint";
import * as anotherExternalImport from "eslint/bin/eslint";

const myArray = [
	"hello",
];
console.log(myArray);

const myObject = {
	hello: "world",
};

// This is so we don't get unused variable errors.
console.log(
	myArray,
	myObject,
	localImport,
	externalImport,
	anotherExternalImport,
	anotherLocalImport
);
