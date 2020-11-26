import { check, body, validationResult } from 'express-validator'

import User from '../model/user'

// Create a new user
exports.createUser = [
  check('name')
    .isLength({ min: 4 })
    .withMessage('Hi, we are interested in your full name'),
  body('email')
    .isEmail()
    .withMessage('Type in an actual email')
    .normalizeEmail(),
  body('phone_no').isLength({ min: 9 }).withMessage('Please enter your phone number'),
  check('password')
    .isLength({ min: 8 })
    .withMessage('Password must be at least 8 characters long'),
  async (req, res) => {
    const errors = await validationResult(req)
    if (!errors.isEmpty()) {
      res.status(422).send({
        errors: errors.array()
      })
    } else {
      try {
        const user = new User(req.body)
        const registeredUser = await User.findOne({ email: req.body.email })
        if (registeredUser) {
          return res
            .status(409)
            .send({ error: 'User with this email already exists' })
        }

        user.save(async (err) => {
          if (err) {
            return res.status(403).send({
              error: err.message
            })
          }
          res.status(201).send({
            message: 'Congrats! You have successfully signed up with Exambly!'
          })
        })
      } catch (error) {
        res.status(500).send(error)
      }
    }
  }
]
