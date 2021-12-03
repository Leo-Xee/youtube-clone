// const { Schema, model } = require('mongoose');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const saltRounds = 10;

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    maxLength: 50,
  },
  email: {
    type: String,
    trim: true,
    unique: 1,
  },
  password: {
    type: String,
    minlength: 6,
  },
  lastname: {
    type: String,
    maxlength: 50,
  },
  role: {
    type: Number,
    default: 0,
  },
  image: String,
  token: {
    type: String,
  },
  tokenExp: {
    type: Number,
  },
});

// user가 save되기 전에 실행
userSchema.pre('save', function (next) {
  let user = this;

  console.log(this);
  // password가 변경될 때만 암호화
  if (user.isModified('password')) {
    // 암호화
    bcrypt.genSalt(saltRounds, function (err, salt) {
      if (err) return next(err);

      bcrypt.hash(user.password, salt, function (err, hash) {
        if (err) return next(err);
        user.password = hash;
        next();
      });
    });
  } else {
    next();
  }
});

// 비밀번호 비교 메소드
userSchema.methods.comparePassword = function (plainPassword, cb) {
  bcrypt.compare(plainPassword, this.password, function (err, isMatch) {
    if (err) return cb(err);
    cb(null, isMatch);
  });
};

// JWT 생성 메소드
userSchema.methods.generateToken = function (cb) {
  let user = this;

  // JWT로 token 생성하기
  let token = jwt.sign(user._id.toHexString(), 'secretToken');

  user.token = token;
  user.save(function (err, user) {
    if (err) return cb(err);
    cb(null, user);
  });
};

userSchema.statics.findByToken = function (token, cb) {
  let user = this;

  jwt.verify(token, 'secretToken', function (err, decoded) {
    // 유저 id를 이용해서 유저를 찾은 다음 token을 비교
    user.findOne({ _id: decoded, token: token }, function (err, user) {
      if (err) return cb(err);
      cb(null, user);
    });
  });
};

const User = mongoose.model('User', userSchema);

module.exports = { User };
