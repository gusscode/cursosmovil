const express = require('express');

const path = require('path');
const bodyParser = require('body-parser');

const app = express();

app.set('port', process.env.PORT || 80);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

// routes
require('./routes/index')(app);

app.listen(app.get('port'), () => {
  console.log(`servidor en puerto ${app.get('port')}`)
});
