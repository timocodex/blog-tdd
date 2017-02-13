var User = require('../models/user')
module.exports ={
  register: function(req,res){
    var newUser = User({
      username: req.body.username,
      password:req.body.password
    })

    newUser.save(function(err){
      if(err){
        throw err
      }
      else{
        res.send(newUser)
      }
    })
  },
  login: function(req,res){
    User.find({username:req.body.username,password:req.body.password},function(err,user){
      if(user){
        res.send('sukses login')
      }
      else{
        res.send('gagal coi')
      }
    })
  }

}
