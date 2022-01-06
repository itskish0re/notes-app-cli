import fs from 'fs'
const loadNotes = function(){
    try{
        return JSON.parse(fs.readFileSync("./notes.json",'utf8'));
    }catch{
        return {notes:[]};
    }
};

const saveNotes = function(notes){
    fs.writeFileSync("./notes.json",JSON.stringify(notes));
};

const addNote = function(data, notes){
    notes.notes.push(data);
    return notes;
};

const removeNote = function(data, notes){
    notes.notes = notes.notes.filter((item) => item.title !== data);
    return notes;
};

const printNotes = function(notes){
    let printData = '';
    notes.notes.forEach(function(item){
        printData += `${item.title}\n${item.body}\n\n`
    });
    return printData;
};

export default {
    loadNotes,
    saveNotes,
    addNote,
    removeNote,
    printNotes
};