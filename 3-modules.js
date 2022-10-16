// Modules - encapsulated Code (only chare minimum)
// Common JS, every file is module (by default)

const names = require("./4-names");
const sayHi = require("./5-util");

const data = require("./6-alternative-flavour");

require("./7-mindgrenade");

//console.log(data);

const { peter, john } = names;

sayHi(peter);
sayHi("Breath");
