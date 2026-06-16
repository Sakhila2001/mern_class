import { loginService, registerService } from "./auth.service.js";

export const registerUser = async (req, res) => {
  try {
    const { user } = await registerService(req.body);
    const safeUser = user.toJSON(); // convert sequelize instance → plain object
    delete safeUser.password; // remove password from response
    delete safeUser.refreshToken; // remove refresh token from response
    res.status(201).json({
      success: true,
      message: "User created successfully",
      data: {
        user: safeUser,
      },
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { user, accessToken, refreshToken } = await loginService(req.body);
    //refresh token in cookie for security
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      sameSite: "strict",
      maxAge: 1000 * 60 * 60 * 24 * 7, // 7 days
    });
    return res.status(200).json({
      success: true,
      message: "User logged in successfully",
      data: {
        user,
        accessToken,
      },
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: "Internal server error",
    });
  }
};
