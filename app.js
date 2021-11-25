const yargs = require('yargs');
const { addNote} = require('./notes');
const notes = require("./notes");

yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    title: {
      describe: 'title of a note',
      demandOption: true
    },
    body: {
      describe: 'message of a note'
    }
  },
  handler: function (args) {
    addNote(args.title, args.body);
  }
})

yargs.command({
  command: 'del',
  describe: 'Deleting needed note',
  builder: {
    title: {
      describe: 'title of a note',
      demandOption: true
    }
  },
  handler({title}) {
   notes.removeNote(title);
  }
})



yargs.parse();
