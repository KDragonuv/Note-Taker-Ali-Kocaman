const express = require('express');
// const fs = require('fs')
// const path = require('path')

const app = express();
const PORT = process.env.PORT || 3000;



app.use(express.static('public'));
app.use(express.json());
app.use(express.static('public'));

require('./routes/htmlRoutes')(app);
require('./routes/apiRoutes')(app);

app.listen(PORT, () => {
    console.log(Server listening on PORT: ${PORT});
});