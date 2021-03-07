let fs = require("fs");
let path = require('path');

function viewExecutor(dirname , mode){
    if(mode == "Flat"){
        viewFlat(dirname);
    }else{
        viewTree(dirname,"");
    }
}

module.exports = {
    viewFn : viewExecutor
}

function isFileChecker(dirPath) { return fs.statSync(dirPath).isFile(); }
function readContent(dirPath) { return fs.readdirSync(dirPath); } 

function viewFlat(dirPath){
    let isFile = isFileChecker(dirPath);
    if(isFile){
        console.log(dirPath+"*");
    }else{
        console.log(dirPath);
        let subFiles = readContent(dirPath);

        for(let fi=0;fi<subFiles.length;fi++){
            viewFlat(path.join(dirPath,subFiles[fi]));
        }
    }
}

function isFileChecker(dirPath) { return fs.lstatSync(dirPath).isFile(); }
function readContent(dirPath) { return fs.readdirSync(dirPath); } 

function viewTree(dirPath,indent){
    let isFile = isFileChecker(dirPath);
    let basePath = path.basename(dirPath);
    if(isFile){
        console.log(indent,basePath+"*");
    }else{
        
        let subFiles = readContent(dirPath);
        console.log(indent,basePath);
        for(let fi=0;fi<subFiles.length;fi++){
            viewTree(path.join(dirPath,subFiles[fi]),indent+"\t");
        }
    }
}