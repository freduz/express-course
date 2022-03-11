const mongoose = require('mongoose');

module.exports = () => {
  return async () => {
    try {
      const conn = await mongoose.connect(
        'mongodb://localhost:27017/course-db'
      );
      console.log(`DB connected on ${conn.connection.host}`);
    } catch (err) {
      console.log(err);
    }
  };
};
