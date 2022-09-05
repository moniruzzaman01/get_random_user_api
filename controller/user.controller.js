module.exports.getRandomUser=(req,res,next)=>{
    res.send('Random user found!')
}
module.exports.getAllUser=(req,res,next)=>{
    res.send('All user found!')
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

