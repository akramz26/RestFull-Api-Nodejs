const users = require('./routes/users');
const auth = require('./routes/auth');
const cards = require('./routes/cards');
const express = require('express');
const app = express();
const PORT = 3000;
const http = require('http').Server(app);
const mongoose = require('mongoose');
//require('dotenv').config()




mongoose.set('strictQuery', false);
mongoose.connect('mongodb://localhost/my-restapi', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...') + err);

app.use(express.json());

// let demoLogger = (req, res, next) => {
//   let current_datetime = new Date();
//   let formatted_date =
//     current_datetime.getFullYear() +
//     "-" +
//     (current_datetime.getMonth() + 1) +
//     "-" +
//     current_datetime.getDate() +
//     " " +
//     current_datetime.getHours() +
//     ":" +
//     current_datetime.getMinutes() +
//     ":" +
//     current_datetime.getSeconds();
//   let method = req.method;
//   let url = req.url;
//   let status = res.statusCode;
//   let log = `[${formatted_date}] ${method}:${url} ${status}`;
//   console.log(log);
//   next();
// };

//app.use(demoLogger);


app.use('/', users);
app.use('/', cards);
app.use('/', auth);






http.listen(PORT, () => {
  console.log(`you'r server runnig in Port ${PORT}`);
});
