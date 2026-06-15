import { registerService } from "./auth.service.js";

export const registerUser = async (req, res) => {
  try {
    const user = await registerService(req.body);
    const safeUser = user.toJSON(); // convert sequelize instance → plain object
    delete safeUser.password; // remove password from response
    res.status(201).json({
      success: true,
      message: "User created successfully",
      user: safeUser,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
