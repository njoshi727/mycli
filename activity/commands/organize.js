function organizeExecutor(dirPath){
    organize(dirPath,dirPath);
}

let fs = require("fs");
let path = require('path');

function isFileChecker(dirPath) { return fs.statSync(dirPath).isFile(); }
function readContent(dirPath) { return fs.readdirSync(dirPath); } 

let types = {
    media: ["mp4", "mkv", "mp3"],
    archives: ['zip', '7z', 'rar', 'tar', 'gz', 'ar', 'iso', "xz"],
    documents: ['docx', 'doc', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf', 'txt', 'ps', 'tex'],
    app: ['exe', 'dmg', 'pkg', "deb"]
}

function organize (dirPath,originalPath){
    let isFile = isFileChecker(dirPath);
    if (!fs.existsSync(path.join(originalPath,"OrganizedFiles"))){
        fs.mkdirSync(path.join(originalPath,"OrganizedFiles"));
    }

    if(isFile){
        var ext = path.extname(dirPath);
        console.log(ext);
        var dName = getDirectoryName(ext);

        var dir = path.join(originalPath,"OrganizedFiles",dName);
        if (!fs.existsSync(dir)){
            fs.mkdirSync(dir);
        }

        var filename = path.basename(dirPath);
        fs.copyFile(dirPath, path.join(dir,filename), function(err) {
            if (err) {
                throw err
            } else {
                console.log("Successfully copied and moved the file!")
            }
            }
        )
        
    }else{
        let subFiles = readContent(dirPath);

        for(let fi=0;fi<subFiles.length;fi++){
            organize(path.join(dirPath,subFiles[fi]),originalPath);
        }
    }
}

function isMediaExtension(ext){
    for(let idx = 0 ; idx < types["media"].length;idx++){
        if(ext.substring(1) == types.media[idx]) return true;
    }
    return false;
}

function isArchivesExtension(ext){
    for(let idx = 0 ; idx < types["archives"].length;idx++){
        if(ext.substring(1) == types.archives[idx]) return true;
    }
    
    return false;
}

function isDocumentsExtension(ext){
    for(let idx = 0 ; idx < types["documents"].length;idx++){
        if(ext.substring(1) == types.documents[idx]) return true;
    }
    
    return false;
}

function isAppExtension(ext){
    for(let idx = 0 ; idx < types["app"].length;idx++){
        if(ext.substring(1) == types.app[idx]) return true;
    }
    return false;
}

function getDirectoryName(ext){
    if(isMediaExtension(ext)) return "Media";
    else if(isAppExtension(ext)) return "Apps";
    else if(isDocumentsExtension(ext)) return "Docs";
    else if(isArchivesExtension(ext)) return "Archives";
    else return "Others";
}

module.exports = {
    organizeFn : organizeExecutor
}