#!/usr/bin/env node

// commands-> 
// view --tree, --flat 
// organize-> same folder , multiple folder 
// help 
// [node ,mycli.js ,view ,dirName ,mode] 
// node mycli.js organize -/foldername 
// node mycli.js help 


//Importing function from Command File
let {helpFn} = require("/home/nickjosi/PepCodingWebDevelopment/1.file_system_07_02_2021/lib/help.js");
let {organizeFn} = require("/home/nickjosi/PepCodingWebDevelopment/1.file_system_07_02_2021/lib/organize.js");
let {viewFn} = require("/home/nickjosi/PepCodingWebDevelopment/1.file_system_07_02_2021/lib/view.js");

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


