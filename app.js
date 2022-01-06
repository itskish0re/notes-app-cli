import ch from 'chalk';
import yargs from 'yargs';
import nt from './notes.js';
console.log('test');
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
       console.log(argv.title);
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
        console.log(argv.title);
    }
});