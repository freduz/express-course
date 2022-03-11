const Course = require('../model/course');

exports.getAllCourse = (req, res, next) => {
  console.log(req.body);
  res.status(200).json({
    status: 'success',
    data: null,
  });
};

exports.getCourse = (req, res, next) => {
  res.status(200).json({
    status: 'success',
    data: null,
  });
};

exports.createCourse = async (req, res, next) => {
  const course = await Course.create(req.body);
  res.status(201).json({
    status: 'success',
    data: {
      data: course,
    },
  });
};
