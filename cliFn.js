import nt from './notes.js';
import yargs from "yargs";
let notesData = nt.loadNotes();

yargs.command({
    command: 'add',
    describe: "Add notes",
    builder:{
        title: {
            describe: 'note title',
            demandOption: true,
            type: 'string',
        },
        body: {
            describe: 'note body',
            demandOption: true,
            type: 'string',
        }
    },
    handler: function(argv) {
        notesData = nt.addNote({
                title: argv.title,
                body: argv.body,
            },notesData);
        nt.saveNotes(notesData);
    }
});

yargs.command({
    command: 'remove',
    describe: "remove notes",
    builder:{
        title: {
            describe: 'note title',
            demandOption: true,
            type: 'string',
        }
    },
    handler: function(argv) {
        notesData = nt.removeNote(argv.title,notesData);
        nt.saveNotes(notesData)
    }
});

yargs.command({
    command: 'show',
    describe: "remove notes",
    builder:{
        title: {
            describe: 'note title',
            type: 'string',
        }
    },
    handler: function() {
        console.log(nt.printNotes(notesData));
    }
});

export default yargs.argv;