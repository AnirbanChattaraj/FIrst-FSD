const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/fsdDB")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

const Name = mongoose.model("Name", new mongoose.Schema({ fullname: String }));

app.post("/add", async (req, res) => {
  const data = new Name({ fullname: req.body.fullname });
  await data.save();
  res.json({ message: "Name added!" });
});

app.get("/all", async (req, res) => {
  const names = await Name.find();
  res.json(names);
});

app.listen(4000, () => console.log("Server running on port 4000"));

