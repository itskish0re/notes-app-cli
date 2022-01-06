import fs from  'fs'
const loadNotes = function(){
    try{
        return fs.readFileSync(notes.json,'utf8');
    }catch{
        return {notes:[]};
    }
}

module.exports ={};