import User from '../models/user.model.js'

export const register = async (req, res) => {
  const {usuario, email, contraseña } = req.body

  try {
    const newUser = new User({
      usuario,
      email,
      contraseña
    });
  
    const userSaved = await newUser.save();
    res.json(userSaved);  
   } catch (error) {
     console.log(error);
    }
  

  
};

export const login = (req, res) => res.send("login");
