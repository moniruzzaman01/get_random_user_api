const fs = require('fs');

module.exports.getRandomUser=(req,res,next)=>{
    fs.readFile('data.json',(err,data)=>{
        if(err)
        {
            res.send('Error occured while fetching random data!')
        }
        else{
            const allData=JSON.parse(data)
            const idArray=allData.map(d=>d.id)
            const randomNumber = Math.floor(Math.random() * (idArray.length))
            const randomData= allData.find(d=>d.id===idArray[randomNumber])
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

