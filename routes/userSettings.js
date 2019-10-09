const express = require("express");
const router = express.Router();
const User = require("../models/User");
const uploadCloud = require("../config/cloudinary-profile");
const bcrypt = require("bcrypt");
const bcryptSalt = 10;

router.get("/:id", (req, res, next) => {
  console.log(req.params.id);
  const { id } = req.params;
  User.findById(id).then(response => {
    res.json(response);
  });
});

router.post(
  "/add/image",
  uploadCloud.single("profilePicture"),
  (req, res, next) => {
    // console.log('file is: ', req.file)
    // <console className="l">se </console>og(req.file);
    if (!req.file) {
      next(new Error("No file uploaded!"));
      return;
    }
    // get secure_url from the file object and save it in the
    // variable 'secure_url', but this can be any name, just make sure you remember to use the same in frontend
    res.json({ secure_url: req.file.secure_url });
  }
);

router.put("/:id", (req, res) => {
  // const { user } = req.body;
  const {
    fullName,
    username,
    newPasswordTest,
    profilePictureTest,
    oldPasswordTest
  } = req.body;
  console.log(req.body);

  User.findById(req.params.id).then(dbUser => {
    User.findOne({ username }).then(found => {
      if (found) {
        return res
          .status(400)
          .json({ message: "This username is already taken" });
      }

      const salt = bcrypt.genSaltSync(bcryptSalt);
      const newHashPass = bcrypt.hashSync(newPasswordTest, salt);

      if (!bcrypt.compareSync(oldPasswordTest, dbUser.password)) {
        return res
          .status(400)
          .json({ message: "Please fill with the correct password" });
      } else if (newHashPass === dbUser.password) {
        return res
          .status(400)
          .json({ message: "You're using the same password as before" });
      }

      const password = newPasswordTest ? newHashPass : dbUser.password;
      const profilePicture = profilePictureTest
        ? profilePictureTest
        : dbUser.profilePicture;
      User.findByIdAndUpdate(
        req.params.id,
        { username, fullName, profilePicture, password },
        { new: true }
      )
        .then(response => {
          console.log(response);
          res.json({ message: "Profile successfully updated" });
        })
        .catch(err => {
          console.log(err);
        });
    });
  });
});

module.exports = router;
