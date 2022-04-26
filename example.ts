import builtinImport from "fs";
import externalImport from "eslint";
import anotherExternalImport from "eslint/bin/eslint";
import * as anotherInternalImport from "./typescript";
import * as internalImport from "./index";

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
	internalImport,
	externalImport,
	anotherExternalImport,
	anotherInternalImport,
	builtinImport
);
