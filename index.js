const mongoose = require("mongoose");

mongoose
  .connect("mongodb://alex:qwe@localhost:27017/cpstudio92", {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("ok");
  })
  .catch((err) => {
    console.log(err);
  });
