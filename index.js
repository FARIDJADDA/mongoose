const mongoose = require("mongoose");
const schema = mongoose.Schema;

const projectSchema = schema({
  title: String,
  index: Number,
  nbrOfLessons: Number,
  active: Boolean,
});

const Projects = mongoose.model("chapters", projectSchema);

mongoose
  .connect("mongodb://alex:qwe@localhost:27017/cpstudiodb", {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("ok");
    Projects.find({}, (err, documents) => {
      console.log(documents);
      // console.log(err);
    });
  })
  .catch((err) => {
    console.log(err);
  });
