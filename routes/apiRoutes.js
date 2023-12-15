const fs = require('fs');
const path = require('path');

module.exports = (app) => {                   // <= Route to read db.json and return all saved notes
    app.get('/api/notes', (req, res) => {
        const notes = JSON.parse(fs.readFileSync(path.join(_dirname, '../db/db.json'), 'utf8'));
        res.json(notes);
    });

    app.post('/api/notes', (req, res) => {                // <= Route to receive a new note, add it to db.json, and return the new note
        const notes = JSON.parse(fs.readFileSync(path.join(dirname, '../db/db.json'), 'utf8'));

        const newNote = req.body;      // <= Assign a unique ID to the new note
        newNote.id = Math.random();
        notes.push(newNote);

        fs.writeFileSync(path.join(__dirname, '../db/db.json'), JSON.stringify(notes));     // <=  Save notes back to the file

        res.json(newNote);
    });
};