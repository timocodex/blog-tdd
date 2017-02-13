var chai = require('chai')
var should = chai.should()
var chaiHttp = require('chai-http');

chai.use(chaiHttp);

describe('tes routing article',function(){
  // it('should return article json when post /articles/create',function(done){
  //   chai.request('http://localhost:3000').post('/articles/create').send({ userid: '58a174ca465b8d1944981bac', story: 'anak ini adalah seorang anak yang sangat pandai' }).end(function (err, res) {
  //   res.body.should.have.deep.property('story','anak ini adalah seorang anak yang sangat pandai')
  //   done()
  //   })
  // })
  it('should return user json when get /articles/show/:id',function(done){
    chai.request('http://localhost:3000').get('/articles/show/58a174ca465b8d1944981bac').end(function (err, res) {
    res.body.should.have.lengthOf(2)
    done()
    })
  })
  it('should return user json when get /articles/update',function(done){
    chai.request('http://localhost:3000').put('/articles/update/58a175ce11c9fc1a07f2b867').send({story: 'kisah anak diberi ubat cabut lari' }).end(function (err, res) {
    res.body.should.have.deep.property('story','kisah anak diberi ubat cabut lari')
    done()
    })
  })
  // it('should return empty object when delete /articles/delete/id',function(done){
  //   chai.request('http://localhost:3000').delete('/articles/delete/58a1760511c9fc1a07f2b869').end(function (err, res) {
  //   res.text.should.equal('story deleted')
  //   done()
  //   })
  // })
})
