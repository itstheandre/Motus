const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const userSchema = new Schema(
  {
    username: String,
    password: String,
    socialId: String,
    profilePicUrl: String
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    },
    content: [{ type: Schema.Types.ObjectId, ref: "Content" },]

  },
  

);

const User = model("User", userSchema);
module.exports = User;

/* 
Content connection?
Following?
Followers?
Comments?
*/
