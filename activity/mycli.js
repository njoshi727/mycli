// commands-> 
// view --tree, --flat 
// organize-> same folder , multiple folder 
// help 
// [node ,mycli.js ,view ,dirName ,mode] 
// node mycli.js organize -/foldername 
// node mycli.js help 


//Importing function from Command File
let {helpFn} = require("./commands/help");
let {organizeFn} = require("./commands/organize");
let {viewFn} = require("./commands/view");

let input = process.argv.slice(2);
let cmd = input[0];

switch(cmd){
    case "view":
        viewFn(input[2],input[1]);
        break;
    case "organize":
        organizeFn(input[1]);
        break;
    case "help":
        helpFn();
        break;
    default :
        console.log("Please input 'help' command to know about all allowed commands");
}


