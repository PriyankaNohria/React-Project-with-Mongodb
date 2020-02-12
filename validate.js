const { check, validationResult } = require('express-validator');

exports.userSignupValidator = (req, res, next) => {

    check("firstname", "First Name is required").notEmpty();
    check("lastname","Last Name is required").notEmpty();
    check("email", "Email must be between 3 and 32 characters")
        .matches(/.+\@.+\..+/)
        .withMessage('Email must contain @')
        .isLength({
            min: 4,
            max: 2000
        })

    check("password", "Password is required").notEmpty()

    check('password')
        .isLength({ min: 6 })
        .withMessage('Password must contain at least 6 characters')
        .matches(/\d/)
        .withMessage('Password must contain a number')

    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }
    next();
}