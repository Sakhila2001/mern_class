import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../users/user.model.js";

export const registerService = async (data) => {
  const { name, email, password, confirmPassword, roles } = data;

  // required fields
  if (!name || !email || !password || !confirmPassword) {
    throw new Error("Please provide all required fields");
  }

  // name validation
  if (name.length < 3 || name.length > 50) {
    throw new Error("Name must be between 3 and 50 characters");
  }

  if (!/^[a-zA-Z\s]+$/.test(name)) {
    throw new Error("Name can only contain letters and spaces");
  }

  // email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    throw new Error("Invalid email format");
  }

  // duplicate email check (ONLY ONCE)
  const existingUser = await User.findOne({ where: { email } });
  if (existingUser) {
    throw new Error("Email already exists");
  }

  // role validation
  const allowedRoles = ["admin", "doctor", "receptionist", "patient"];
  if (roles && !allowedRoles.includes(roles)) {
    throw new Error("Invalid role");
  }

  // password validation
  if (password.length < 6) {
    throw new Error("Password must be at least 6 characters long");
  }

  if (password !== confirmPassword) {
    throw new Error("Passwords do not match");
  }

  // hash password
  const hashPassword = await bcrypt.hash(password, 10);

  // create user
  const user = await User.create({
    name,
    email,
    password: hashPassword,
    roles: roles || "patient",
  });

  return {
    user,
  };
};

export const loginService = async (data) => {
  const { email, password } = data;

  if (!email || !password) {
    throw new Error("Please provide all required fields");
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    throw new Error("Invalid email format");
  }

  // find user
  const user = await User.findOne({ where: { email } });
  if (!user) {
    throw new Error("User not found");
  }
  // compare password
  const isPasswordMatch = await bcrypt.compare(password, user.password);
  if (!isPasswordMatch) {
    throw {
      status: 401, //401 status code means unauthorized
      message: "Invalid password",
    };
  }
  //access token and refresh token generation
  const accessToken = jwt.sign(
    {
      id: user.id,
      roles: user.roles,
    },
    process.env.JWT_ACCESS_SECRET,
    { expiresIn: process.env.JWT_ACCESS_EXPIRES_IN },
  );
  const refreshToken = jwt.sign(
    {
      id: user.id,
      roles: user.roles,
    },
    process.env.JWT_REFRESH_SECRET,
    { expiresIn: process.env.JWT_REFRESH_EXPIRES_IN },
  );

  //password and refresh token excluded from response
  //const { password: _, ...safeUser } = user.toJSON();
  const {
    password: _password,
    refreshToken: _refreshToken,
    ...safeUser
  } = user.toJSON();
  return {
    accessToken,
    refreshToken,
    user: safeUser,
  };
};
