import User from '../model/users'

const chai = require('chai')
const chaiHttp = require('chai-http')
const assertArrays = require('chai-arrays')
const server = require('../bin/www')

const should = chai.should()
const { expect } = chai
chai.use(assertArrays)
chai.use(chaiHttp)
