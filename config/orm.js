const connection = require('./connection');

const orm = {
    selectAll(tableInput, cb) {
        const queryString = `SELECT * FROM ${tableInput};`;
        connection.query(queryString, (err, result) => {
          if (err) {
            throw err;
          }
          cb(result);
        });
      },
      insertOne() {

      },
      updateOne() {

      }
}

module.exports = orm;