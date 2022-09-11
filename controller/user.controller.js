const fs = require("fs");

module.exports.getRandomUser = (req, res, next) => {
  fs.readFile("data.json", (err, data) => {
    if (err) {
      return res.send("Error occured while fetching random data!");
    } else {
      const allData = JSON.parse(data);
      const idArray = allData.map((d) => d.id);
      const randomNumber = Math.floor(Math.random() * idArray.length);
      const randomData = allData.find((d) => d.id === idArray[randomNumber]);
      return res.send(randomData);
    }
  });
};
module.exports.getAllUser = (req, res, next) => {
  fs.readFile("data.json", (err, data) => {
    if (err) {
      return res.send("Error occured while fetching all data!");
    } else {
      return res.send(data);
    }
  });
};
module.exports.saveUser = (req, res, next) => {
  fs.readFile("data.json", (err, data) => {
    if (err) {
      return res.send("Error occured while fetching random data!");
    } else {
      const allData = JSON.parse(data);
      allData.push(req.body);
      fs.writeFile("data.json", JSON.stringify(allData), () => {
        return res.send("New user saved successfully!");
      });
    }
  });
};
module.exports.updateUser = (req, res, next) => {
  fs.readFile("data.json", (err, data) => {
    if (err) {
      return res.send("Error occured while fetching random data!");
    } else {
      const allData = JSON.parse(data);
      const filtered = allData.filter((d) => d.id != req.body.id);
      let find = allData.find((d) => d.id == req.params.id);
      find = req.body;
      const updatedData = [...filtered, find];
      updatedData.sort((a, b) => a.id - b.id);
      fs.writeFile("data.json", JSON.stringify(updatedData), (err, data1) => {
        if (err) {
          return res.send("error occured!");
        } else {
          return res.send("User updated");
        }
      });
    }
  });
};
module.exports.updateMultipleUser = (req, res, next) => {
  return res.send("Updated multiple user!");
};
module.exports.deleteUser = (req, res, next) => {
  console.log(req.query.id);
  fs.readFile("data.json", (err, data) => {
    if (err) {
      return res.send("Error occured while fetching random data!");
    } else {
      const allData = JSON.parse(data);
      const filtered = allData.filter((d) => d.id !== req.query.id);
      fs.writeFile("data.json", JSON.stringify(filtered), () => {
        return res.send("User deleted successfully!");
      });
    }
  });
};
