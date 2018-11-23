const { SHA256 } = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const password = '123abc!'

bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(password, salt, (err, hash) => {
        console.log(hash);
    })
})

const hashedPassword = '$2a$10$u.ed1jo7ayZgLjO/S/PCMeZTANY111vpqF0cuIC9eBHGxTW0qCZLy'

bcrypt.compare(password, hashedPassword, (err, res) => {
    console.log(res);
});

// var data = {
//     id: 10
// }

// var token = jwt.sign(data, '123abc')
// console.log(token);
// var decoded = jwt.verify(token, '123abc')
// console.log(decoded);

// const message = 'I am user number 3';
// const hash = SHA256(message).toString();

// console.log(message);
// console.log(hash);

// var data = {
//     id: 4
// }
// var token = {
//     data,
//     hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
// }

// var resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString()

// if (resultHash === token.hash) {
//     console.log('Data was not changed')
// } else {
//     console.log('Data was changed')
// }