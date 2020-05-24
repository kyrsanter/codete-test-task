const express = require('express');
const http = require('http');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const config = require('./config/config');

/*Routers import*/
const loginRouters = require('./routes/login');
const userRouters = require('./routes/user');
const scheduleRouters = require('./routes/schedule');


const app = express();
http.createServer(app);

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/api', loginRouters);
app.use('/api/users', userRouters);
app.use('/api/schedule', scheduleRouters);

const start = async () => {
   try {
      await mongoose.connect(config.db, {
         useNewUrlParser: true,
         useUnifiedTopology: true,
         useFindAndModify: false
      });
      app.listen(config.port)
   }
   catch (error) {
      throw new Error('Bed connection to DB')
   }
};

start();

