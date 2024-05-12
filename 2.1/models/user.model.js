import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  usuario: {
    type: "string"
  },
  email: {
    type: "string"
  },
  contraseña: {
    type: "string",
  }
  },{
    timestamps: true
  })

export default mongoose.model("User", userSchema)
