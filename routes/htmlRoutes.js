const path = require('path');

module.exports = (app) => {                // <= Route to return notes as .html
    app.get('/notes', (req, res) => {
        res.sendFile(path.join(dirname, '../public/notes.html'));
    });

         app.get('*', (req, res) => {                                  // <= Catch-all route to return index.html for all other routes
        res.sendFile(path.join(dirname, '../public/index.html'));
    });
};