const fs = require('fs');

function getNotes() {
  try {
    const notesBuffer = fs.readFileSync('notes.json');
    return JSON.parse(notesBuffer.toString());
  } catch (err) {
    return [];
  }
}

function addNote(title, body) {
  const notes = getNotes();
  notes.push({ title, body });
  const titles = notes.map((note) => note.title);

  if (titles.includes(title)) {
    return;
  }

  fs.writeFileSync('notes.json', JSON.stringify(notes));

}

const removeNote = (title) => {

  const notez = getNotes();

  const updNotes = notez.filter(note => note.title != title)

  if (updNotes.length !== notez.length) {
addNote(updNotes);
    console.log('Note delete sucess');
  }
  else  {
    console.log('Error: this task is not issued');
  }

}

module.exports = {
  addNote, removeNote
};

