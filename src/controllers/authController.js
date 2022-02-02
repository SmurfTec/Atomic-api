const jwt = require('jsonwebtoken');
const catchAsync = require('../helpers/catchAsync');
const AppError = require('../helpers/appError');
const {
  signUpValidation,
  loginValidation,
} = require('../validations/userValidations');
const User = require('../models/User');

const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    // payload + secret + expire time
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

const createsendToken = (user, statusCode, res) => {
  const token = signToken(user._id);
  // Remove the password from output
  let resUser = user.toObject();
  resUser.password = undefined;

  res.status(statusCode).json({
    status: 'success',
    token,
    user: resUser,
  });
};

exports.signup = catchAsync(async (req, res, next) => {
  const validate = signUpValidation.validate(req.body);
  if (validate.error) {
    return next(new AppError(validate.error, 400));
  }

  let user = await User.create(req.body);

  res.status(201).json({
    status: 'success',
    user,
  });
  // createsendToken(user, 201, res);
});

exports.login = catchAsync(async (req, res, next) => {
  const validate = loginValidation.validate(req.body);
  if (validate.error) {
    return next(new AppError(validate.error, 400));
  }
  const { email, password } = req.body;
  if (!email || !password) {
    //  check email and password exist
    return next(new AppError(' please proveide email and password ', 400));
  }
  const user = await User.findOne({ email }).select('+password'); // select expiclity password
  if (!user)
    return next(new AppError(`No User found against email ${email}`, 404));

  console.log(`user.role`, user.role);

  if (
    !user || // check user exist and password correct
    !(await user.correctPassword(password, user.password))
  ) {
    // candinate password,correctpassword
    return next(new AppError('incorrect email or password', 401));
  }
  createsendToken(user, 200, res);
});
