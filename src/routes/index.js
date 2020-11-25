import {
  createUser
} from '../controller/user'

module.exports = (app) => {
  app.get('/', (req, res, next) => res.status(200).send({
    message: 'Welcome to the  Exambly API!'
  }))
  app.get('/api', (req, res) =>
    res.status(200).send({
      message: 'Welcome to the  Exambly API!'
    })
  )
  app.post('/api/user/create', createUser)
}
