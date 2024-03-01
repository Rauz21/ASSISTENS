import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  usuario: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  contraseña: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

export default mongoose.model("User", userSchema);