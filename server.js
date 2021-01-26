const express = require('express');
const path = require('path');
const app = express();

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server up and running on port ${port}.`));

app.use('/static', express.static(path.join(__dirname, 'client/build')));

app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')));
