const fs = require('fs');

module.exports.getRandomUser=(req,res,next)=>{
    res.send('Random user found!')
}
module.exports.getAllUser=(req,res,next)=>{
    fs.readFile('data.json',(err,data)=>{
        if(err)
        {
            res.send("Error occured!")
        }
    else{
        res.send(data)
    }
    })
}
module.exports.saveUser=(req,res,next)=>{
    res.send('Save a user!')
}
module.exports.updateUser=(req,res,next)=>{
    res.send('User updated!')
}
module.exports.updateMultipleUser=(req,res,next)=>{
    res.send('Updated multiple user!')
}
module.exports.deleteUser=(req,res,next)=>{
    res.send('Delete a user!')
}

