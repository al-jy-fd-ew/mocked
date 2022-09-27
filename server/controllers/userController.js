const userController = {};
const bcrypt = require('bcrypt');
const db = require('../models/models.js');

userController.createUser = (req, res, next) => {
  console.log('in userController.createUser');

  const { username, password } = req.body;
  if (!username || !password) return next('Missing username or password in create user');

  const hash = bcrypt.hashSync(password, 10);

  const query = `
    INSERT INTO users (_id, username, password)
    VALUES (DEFAULT, $1, $2) RETURNING _id;
  `;

  db.query(query, [username, hash])
    .then(response => {
      // not returning error if username already exists, but it isn't adding it
      return next();
    })
    .catch(err => {
      return next({
        log: 'Express error handler caught unknown middleware error',
        status: 400,
        message: {
          err: 'error in userController.createUser - issue with user creation',
        },
      });
    });
};

userController.verifyUser = (req, res, next) => {
  console.log('in userController.verifyUser');

  const { username, password } = req.body;
  if (!username || !password) return next('Missing username or password in verify user');

  const query = `
    SELECT *
    FROM users u
    WHERE u.username = $1
  `;

  db.query(query, [username])
    .then((response) => {
      if (response.rows.length === 0) {
        console.log('User does not exist in database.');
        res.redirect('/signup');
      } else {
        console.log('response rows is: ', response.rows);
        bcrypt.compare(password, response.rows[0].password)
          .then((response) => {
            if (!response) {
              console.log('Incorrect password');
              return next();
            }
            return next();
          });
      }
    });
};

module.exports = userController;