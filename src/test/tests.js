import User from '../model/user'

const chai = require('chai')
const chaiHttp = require('chai-http')
const assertArrays = require('chai-arrays')
const server = require('../bin/www')

const should = chai.should()
const { expect } = chai
chai.use(assertArrays)
chai.use(chaiHttp)

const newUser = {
  name: 'John Gabriel',
  email: 'ssssss@hey.com',
  password: 'TestingWithChai',
  phone_no: '08043334343'
}
const user = new User(newUser)

describe('/Create User', () => {
  it('it should create a user', (done) => {
    chai.request(server)
      .post('/api/user/create')
      .send(user)
      .end((err, res) => {
        res.should.have.status(201)
        expect(res.body).to.deep.equal({ message: 'Congrats! You have successfully signed up with Exambly!' })
        done()
      })
  })
})
