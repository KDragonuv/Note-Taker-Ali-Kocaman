const path = require('path');

module.exports = (app) => {
    // Route to return notes.html
    app.get('/notes', (req, res) => {
        res.sendFile(path.join(dirname, '../public/notes.html'));
    });

    // Catch-all route to return index.html for all other routes
    app.get('*', (req, res) => {
        res.sendFile(path.join(dirname, '../public/index.html'));
    });
};