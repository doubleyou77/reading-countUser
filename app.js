const express = require('express');
const path = require('path');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

let current_count = 0;
const MAX_COUNT = 10;

app.get('/', (req, res) => {
  if(current_count < 10) {
    res.render('index');
    current_count++;
    console.log('get ', current_count);
  } else {
    res.render('error');
    console.log('접속자 수가 너무 많습니다.');
  }
});

app.post('/', (req, res) => {
  current_count--;
  console.log('post ', current_count);
});

app.listen('3000', (req, res) => {
  console.log('서버 연결');
});
