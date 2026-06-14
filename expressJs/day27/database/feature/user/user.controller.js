import User from "./user.model.js";
import Post from "../post/post.model.js";

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll({
      attributes: {
        exclude: ["password"],
      },
      include: {
        model: Post,
        as: "posts",
        where: {
          is_published: true,
        },
        required: false,
        attributes: ["id", "title", "content"],
      },
    });

    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch users",
      error: error.message,
    });
  }
};
export const createUser = async (req, res) => {
  try {
    const { name, email, age, password, confirmPassword } = req.body;

    if (!email || !name || !age || !password || !confirmPassword) {
      return res.status(400).json({
        success: false,
        message: "Please provide all the required fields",
      });
    }
    //name validation
    if (name.length < 3 || name.length > 50) {
      return res.status(400).json({
        success: false,
        message: "Name must be between 3 and 50 characters",
      });
    }

    if (!/^[a-zA-Z\s]+$/.test(name)) {
      return res.status(400).json({
        success: false,
        message: "Name can only contain letters and spaces",
      });
    }
    //email validation

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: "Invalid email format",
      });
    }
    const existingUser = await User.findOne({
      where: { email },
    });

    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: "Email already exists",
      });
    }
    //age validation
    if (!Number.isInteger(age)) {
      return res.status(400).json({
        success: false,
        message: "Age must be a number",
      });
    }

    if (age < 1 || age > 120) {
      return res.status(400).json({
        success: false,
        message: "Age must be between 1 and 120",
      });
    }
    //password validation
    if (password.length < 6) {
      return res.status(400).json({
        success: false,
        message: "Password must be at least 6 characters long",
      });
    }
    if (password !== confirmPassword) {
      return res.status(400).json({
        success: false,
        message: "Passwords do not match",
      });
    }

    const user = await User.create({ email, name, age, password });
    res.status(201).json({
      success: true,
      message: "User created successfully",
      data: user,
    });
  } catch (error) {
    res.status(500).json({ message: "Failed to create user", error });
  }
};

export const getSpecificUser = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await User.findByPk(id, {
      attributes: { exclude: ["password"] },
    });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch user", error });
  }
};

export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    let { email, name, age } = req.body;

    const user = await User.findByPk(id, {
      attributes: { exclude: ["password"] },
    });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    //name validation (if provided)
    if (name !== undefined) {
      name = name.trim();

      if (name.length < 3 || name.length > 50) {
        return res.status(400).json({
          success: false,
          message: "Name must be between 3 and 50 characters",
        });
      }

      if (!/^[a-zA-Z\s]+$/.test(name)) {
        return res.status(400).json({
          success: false,
          message: "Name can only contain letters and spaces",
        });
      }
    }

    //email validation (if provided)
    if (email !== undefined) {
      email = email.trim().toLowerCase();

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!emailRegex.test(email)) {
        return res.status(400).json({
          success: false,
          message: "Invalid email format",
        });
      }

      // check duplicate email (exclude current user)
      const existingUser = await User.findOne({
        where: { email },
      });

      if (existingUser && existingUser.id !== user.id) {
        return res.status(409).json({
          success: false,
          message: "Email already exists",
        });
      }
    }

    //age validation (if provided)
    if (age !== undefined) {
      if (!Number.isInteger(age)) {
        return res.status(400).json({
          success: false,
          message: "Age must be a number",
        });
      }

      if (age < 1 || age > 120) {
        return res.status(400).json({
          success: false,
          message: "Age must be between 1 and 120",
        });
      }
    }

    await user.update({
      name: name ?? user.name,
      email: email ?? user.email,
      age: age ?? user.age,
    });

    return res.status(200).json({
      success: true,
      message: "User updated successfully",
      data: user,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Failed to update user",
      error: error.message,
    });
  }
};

export const updatePassword = async (req, res) => {
  try {
    const { id } = req.params;
    const { oldPassword, newPassword, confirmPassword } = req.body;

    const user = await User.findByPk(id);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    if (!oldPassword || !newPassword || !confirmPassword) {
      return res.status(400).json({
        success: false,
        message: "All password fields are required",
      });
    }

    //old password checking validation
    if (oldPassword !== user.password) {
      return res.status(400).json({
        success: false,
        message: "Old password is incorrect",
      });
    }

    //new password validation
    if (newPassword.length < 6) {
      return res.status(400).json({
        success: false,
        message: "Password must be at least 6 characters long",
      });
    }

    //for extra security, check if the new password is different from the old password
    if (newPassword !== confirmPassword) {
      return res.status(400).json({
        success: false,
        message: "Passwords do not match",
      });
    }

    await user.update({
      password: newPassword,
    });

    return res.status(200).json({
      success: true,
      message: "Password updated successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to update password",
      error: error.message,
    });
  }
};
export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    const postCount = await Post.count({
      where: { userId: id },
    });

    if (postCount > 0) {
      return res.status(400).json({
        message: "Delete user's posts first before deleting user",
      });
    }

    const user = await User.findByPk(id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    await user.destroy();

    return res.status(200).json({
      message: "User deleted successfully",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Failed to delete user",
      error: error.message,
    });
  }
};
