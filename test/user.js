var chai = require('chai')
var should = chai.should()
var chaiHttp = require('chai-http');

chai.use(chaiHttp);

describe('tes routing user',function(){
  // it('should return user json when post /users/register',function(done){
  //   chai.request('http://localhost:3000').post('/users/register').send({ username: '12345', password: '123' }).end(function (err, res) {
  //   res.body.should.have.deep.property('username','12345')
  //   done()
  //   })
  // })
  // it('should return user json when post /users/login',function(done){
  //   chai.request('http://localhost:3000').post('/users/login').send({ username: '12345', password: '123' }).end(function (err, res) {
  //   res.text.should.equal('sukses login')
  //   done()
  //   })
  // })
})
