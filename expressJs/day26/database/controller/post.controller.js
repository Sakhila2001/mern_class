import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });
export const getAllPosts = async (req, res) => {
  try {
    const posts = await prisma.post.findMany({
      include: {
        author: true,
      },
    });
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch posts", error });
  }
};

export const createPost = async (req, res) => {
  try {
    const { title, content, published, authorId } = req.body;
    if (!title || !content || !published || !authorId) {
      res.status(400).json({
        success: false,
        message: "Please provide all the required fields",
      });
    }
    const post = await prisma.post.create({
      data: {
        title,
        content,
        published,
        authorId,
      },
    });
    if (!post) {
      res.status(400).json({
        success: false,
        message: "Failed to create post",
      });
    }
    res.status(201).json(post);
  } catch (error) {
    res.status(500).json({ message: "Failed to create post", error });
  }
};
export const getSpecificPost = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await prisma.post.findUnique({
      where: {
        id: Number(id),
      },
    });
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch post", error });
  }
};
export const updatePost = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, content, published, authorId } = req.body;
    const post = await prisma.post.update({
      where: {
        id: Number(id),
      },
      data: {
        title,
        content,
        published,
        authorId,
      },
    });
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ message: "Failed to update post", error });
  }
};

export const deletePost = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await prisma.post.delete({
      where: {
        id: Number(id),
      },
    });
    res.status(200).json({ message: "Post deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete post", error });
  }
};
