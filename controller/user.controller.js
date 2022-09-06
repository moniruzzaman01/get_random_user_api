const fs = require('fs');

module.exports.getRandomUser=(req,res,next)=>{
    fs.readFile('data.json',(err,data)=>{
        if(err)
        {
            res.send('Error occured while fetching random data!')
        }
        else{
            const allData=JSON.parse(data)
            const randomNumber = Math.floor(Math.random() * allData.length)
            const randomData= allData.find(d=>Number(d.id)===randomNumber)
            console.log(randomNumber)
            res.send(randomData)
        }
    })
}
module.exports.getAllUser=(req,res,next)=>{
    fs.readFile('data.json',(err,data)=>{
        if(err)
        {
            res.send("Error occured while fetching all data!")
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

