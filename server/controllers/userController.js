const userController = {};
const bcrypt = require('bcrypt');
const db = require('../models/models.js');

userController.createUser = (req, res, next) => {
  console.log('in userController.createUser');

  const { username, password } = req.body;

  console.log('req body is: ', req.body);

  // if a field is missing, return an error
  if (!username || !password) return next({
    err: 'missing username or password in userController.createUser'
  });

  const hash = bcrypt.hashSync(password, 10);

  const query = `
    INSERT INTO users (_id, username, password)
    VALUES (DEFAULT, $1, $2) RETURNING _id;
  `;

  // insert the new user into the database
  db.query(query, [username, hash])
    .then((response) => {
      return next();
    })
    .catch(err => {
      return next({
        log: 'Express error handler caught unknown middleware error',
        message: {
          err: 'error in userController.createUser - issue with user creation',
        },
      });
    });
};

userController.verifyUser = (req, res, next) => {
  console.log('in userController.verifyUser');

  const { username, password } = req.body;

  console.log('req body is: ', req.body);

  // if a field is missing, return an error
  if (!username || !password) return next(
    { err: 'missing username or password in userController.verifyUser' }
  );

  const query = `
    SELECT *
    FROM users u
    WHERE u.username = $1
  `;

  // find the username in the database
  db.query(query, [username])
    .then((response) => {
      // if the username is not in the database, redirect to sign up page
      if (response.rows.length === 0) {
        console.log('User does not exist in database.');
        return res.status(400).end();
        // if the user IS in the database, check to see if they inputted the correct password
      } else {
        bcrypt.compare(password, response.rows[0].password)
          .then((data) => {
            // return an error if the password is incorrect (response is falsey)
            if (!data) {
              return next(
                { err: 'Incorrect password' }
              );
            }
            res.cookie('user_id', response.rows[0]._id);
            // return next if the user successfully logged in
            console.log('User successfully logged in');
          }).then(res => {
            return next();
          });
      }
    });

};

userController.authVerifyUser = (req, res, next) => {
  console.log('in userController.authVerifyUser');

  const { username } = req.body;


  // query to see if username is already in database
  const query1 = `
  SELECT _id, username
  FROM users
  WHERE username = $1;`;

  db.query(query1, [username])
    .then((response) => {
      if (response.rows[0] === undefined) {
        const query2 = `
        INSERT INTO users (_id, username)
        VALUES (DEFAULT, $1) RETURNING _id;
        `;

        db.query(query2, [username])
          .then((response) => {
            console.log('valid username added to database');
            console.log('response rows is: ', response.rows[0]);
            res.cookie('user_id', response.rows[0]._id);
            return next();
          })
          .catch(err => {
            return next({
              log: 'Express error handler caught unknown middleware error',
              message: {
                err: 'error in userController.authVerifyUser - issue with user creation',
              },
            });
          });
      } else {
        res.cookie('user_id', response.rows[0]._id);
        return next();
      }
    });
};

module.exports = userController;