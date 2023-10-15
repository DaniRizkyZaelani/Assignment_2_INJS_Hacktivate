const express = require('express');
const routes = require('./routes');   
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => res.send('Hello World!'));

app.use(routes);

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
