const { User } = require('../models/User');

const auth = (req, res, next) => {
  // Client의 cookie에서 Token을 가져옴
  let token = req.cookies.x_auth;
  // Token을 복호화한 다음 해당 유저를 찾음
  // 유저가 있으면 인증 성공, 아니면 실패
  User.findByToken(token, (err, user) => {
    if (err) throw err;
    if (!user) return res.json({ isAuth: false, err: true });

    req.token = token;
    req.user = user;
    next();
  });
};

module.exports = { auth };
