import bcrypt from 'bcrypt';
import User from '../models/user.model.js';

export const register = async (req, res) => {
  const { usuario, email, contraseña } = req.body;

  try {
    // Genera un hash de la contraseña
    const hashedPassword = await bcrypt.hash(contraseña, 10); // 10 es el costo del hash

    const newUser = new User({
      usuario,
      email,
      contraseña: hashedPassword // Guarda el hash en la base de datos
    });

    const userSaved = await newUser.save();
    res.json(userSaved);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Error al registrar el usuario' });
  }
};

export const login = async (req, res) => {
  const { usuario, contraseña } = req.body;

  try {
    const user = await User.findOne({ usuario });

    if (!user) {
      return res.status(401).json({ error: 'Credenciales incorrectas' });
    }

    // Compara la contraseña proporcionada con la contraseña almacenada en la base de datos
    const passwordMatch = await bcrypt.compare(contraseña, user.contraseña);
    if (!passwordMatch) {
      return res.status(401).json({ error: 'Credenciales incorrectas' });
    }

    // Si las credenciales son correctas, puedes considerar devolver un token de autenticación
    // Aquí puedes usar bibliotecas como jsonwebtoken para generar tokens JWT

    res.json({ message: 'Inicio de sesión exitoso' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Error al iniciar sesión' });
  }
};