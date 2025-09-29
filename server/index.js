const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const UserModel = require('./model/user.model');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/user")
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

// Register route
app.post('/register', async (req, res) => {
  try {
    const user = await UserModel.create(req.body);
    res.json({ status: "Success", user });
  } catch (err) {
    res.status(400).json({ status: "Error", message: err.message });
  }
});

// Login route
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await UserModel.findOne({ email });

    if (!user) {
      return res.status(400).json({ status: "Error", message: "No record existed!" });
    }

    if (user.password !== password) {
      return res.status(400).json({ status: "Error", message: "Password is incorrect!" });
    }

    // Login success
    res.json({ status: "Success", user: { name: user.name, email: user.email } });
  } catch (err) {
    res.status(500).json({ status: "Error", message: "Server error" });
  }
});

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
