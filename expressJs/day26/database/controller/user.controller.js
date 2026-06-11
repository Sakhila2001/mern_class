import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });
export const getAllUsers = async (req, res) => {
  try {
    const users = await prisma.user.findMany({
      include: {
        posts: true,
      },
    });
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch users", error });
  }
};

export const createUser = async (req, res) => {
  try {
    const { email, name, age } = req.body;

    if (!email || !name || !age) {
      res.status(400).json({
        success: false,
        message: "Please provide all the required fields",
      });
    }
    const user = await prisma.user.create({
      data: {
        email,
        name,
        age,
      },
    });
    if (!user) {
      res.status(400).json({
        success: false,
        message: "Failed to create user",
      });
    }
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ message: "Failed to create user", error });
  }
};

export const getSpecificUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await prisma.user.findUnique({
      where: {
        id: Number(id),
      },
    });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch user", error });
  }
};

export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { email, name, age } = req.body;
    const user = await prisma.user.update({
      where: {
        id: Number(id),
      },
      data: {
        email,
        name,
        age,
      },
    });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: "Failed to update user", error });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    // 1. Check if user has posts
    const postCount = await prisma.post.count({
      where: {
        authorId: Number(id),
      },
    });

    // 2. If posts exist, stop deletion
    if (postCount > 0) {
      return res.status(400).json({
        message:
          "This user has posts. Please delete the posts first before deleting the user.",
      });
    }

    // 3. Delete user if no posts exist
    await prisma.user.delete({
      where: {
        id: Number(id),
      },
    });

    return res.status(200).json({
      message: "User deleted successfully",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Failed to delete user",
      error,
    });
  }
};
