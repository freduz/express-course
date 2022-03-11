const express = require('express');

const path = require('path');
require('./config/dbConfig')()();

const dotenv = require('dotenv');

// course api route
const courseRoute = require('./routes/course');
// page route
const pageRoute = require('./routes/page');

dotenv.config({ path: './config/.env' });

const app = express();
app.use(express.json());

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use('', pageRoute);

//@ API URL
app.use('/api/v1/course/', courseRoute);

app.listen(process.env.PORT, () => {
  console.log(`Server listening on port ${process.env.PORT}`);
});
