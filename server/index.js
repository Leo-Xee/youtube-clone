const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

const { mongoURI } = require('./config/key.js');
const { User } = require('./models/User.js');

// express 4.16이상 부터 bodyParser가 포함되기 때문에 따로 설치할 필요가 없음.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MongoDB 연결
mongoose
  .connect(mongoURI)
  .then(() => console.log('MongoDB Connected!!'))
  .catch((e) => console.log(e));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// 유저 등록
app.post('/api/users/register', (req, res) => {
  const user = new User(req.body);
  user.save((err) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).json({
      success: true,
    });
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
