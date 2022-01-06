import fs from 'fs'
const loadNotes = function(){
    try{
        return JSON.parse(fs.readFileSync("./notes.json",'utf8'));
    }catch{
        return {notes:[]};
    }
}

const saveNotes = function(notes){
    fs.writeFileSync("./notes.json",JSON.stringify(notes));
}

const addNote = function(data,notes){
    notes.notes.append(data);
    return notes;
}

const removeNote = function(notes){
    notes.notes.pop();
    return notes;
}

export default {
    loadNotes,
    saveNotes,
    addNote,
    removeNote
};