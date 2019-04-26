// Asynchronous
const crypto = require('crypto').randomBytes(256).toString('hex');

module.exports = {

    //uri: 'mongodb://localhost:27017/mean-angular-2',
    uri:'mongodb://abhay:123abhay@ds147746.mlab.com:47746/blog-post',
    secret: 'crypto',
    db: 'blog-post'   
}