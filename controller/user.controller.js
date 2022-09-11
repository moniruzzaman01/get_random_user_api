const fs = require("fs");

module.exports.getRandomUser = (req, res, next) => {
  fs.readFile("data.json", (err, data) => {
    if (err) {
      res.send("Error occured while fetching random data!");
    } else {
      const allData = JSON.parse(data);
      const idArray = allData.map((d) => d.id);
      const randomNumber = Math.floor(Math.random() * idArray.length);
      const randomData = allData.find((d) => d.id === idArray[randomNumber]);
      res.send(randomData);
    }
  });
};
module.exports.getAllUser = (req, res, next) => {
  fs.readFile("data.json", (err, data) => {
    if (err) {
      res.send("Error occured while fetching all data!");
    } else {
      res.send(data);
    }
  });
};
module.exports.saveUser = (req, res, next) => {
  fs.readFile("data.json", (err, data) => {
    if (err) {
      res.send("Error occured while fetching random data!");
    } else {
      const allData = JSON.parse(data);
      allData.push(req.body);
      fs.writeFile("data.json", JSON.stringify(allData), () => {
        res.send("New user saved successfully!");
      });
    }
  });
};
module.exports.updateUser = (req, res, next) => {
  res.send("User updated!");
};
module.exports.updateMultipleUser = (req, res, next) => {
  res.send("Updated multiple user!");
};
module.exports.deleteUser = (req, res, next) => {
  console.log(req.query.id);
  fs.readFile("data.json", (err, data) => {
    if (err) {
      res.send("Error occured while fetching random data!");
    } else {
      const allData = JSON.parse(data);
      const filtered = allData.filter((d) => d.id !== req.query.id);
      fs.writeFile("data.json", JSON.stringify(filtered), () => {
        res.send("User deleted successfully!");
      });
    }
  });
};
