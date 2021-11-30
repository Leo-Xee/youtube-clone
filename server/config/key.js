/*
  Heroku와 같은 서비스는 key를 직접 관리해주기 떄문에 구분해서 관리한다.
 */
if (process.env.NODE_ENV === 'prodcuction') {
  module.exports = require('./prod');
} else {
  module.exports = require('./dev');
}
