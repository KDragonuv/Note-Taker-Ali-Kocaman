const fs = require('fs');
const path = require('path');

module.exports = (app) => {
    // Route to read db.json and return all saved notes
    app.get('/api/notes', (req, res) => {
        const notes = JSON.parse(fs.readFileSync(path.join(dirname, '../db/db.json'), 'utf8'));
        res.json(notes);
    });

    // Route to receive a new note, add it to db.json, and return the new note
    app.post('/api/notes', (req, res) => {
        const notes = JSON.parse(fs.readFileSync(path.join(dirname, '../db/db.json'), 'utf8'));

        // Assign a unique ID to the new note
        const newNote = req.body;
        newNote.id = Math.random(); // This is a simple way to generate a unique ID, consider using a better method

        notes.push(newNote);

        // Write updated notes back to the file
        fs.writeFileSync(path.join(__dirname, '../db/db.json'), JSON.stringify(notes));

        res.json(newNote);
    });
};