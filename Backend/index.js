const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const EmployeeModal = require("./models/Employe");
const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect(
  "mongodb+srv://daseajay:dase123@cluster0.ek8y7.mongodb.net/Employee"
);

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  EmployeeModal.findOne({ email: email }).then((user) => {
    if (user) {
      if (user.password === password) {
        res.json("success");
      } else {
        res.json("this password is incorrect");
      }
    } else {
      res.json("no recored existed");
    }
  });
});

app.post("/register", (req, res) => {
  EmployeeModal.create(req.body)
    .then((employees) => res.json(employees))
    .catch((err) => res.json(err));
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log("server os started on port no is", PORT);
});

app.get("/login", (req, res) => {
  res.send("Login route is working!");
});

// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });
