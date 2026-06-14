import Post from "./post.model.js";
import User from "../user/user.model.js";

export const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.findAll({
      include: {
        model: User,
        as: "user",
        attributes: ["id", "name", "email"],
      },
    });
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch posts", error });
  }
};
export const createPost = async (req, res) => {
  try {
    let { title, content, is_published, userId } = req.body;

    // Trim strings
    title = title?.trim();
    content = content?.trim();

    // Required fields
    if (!title || !content || userId === undefined) {
      return res.status(400).json({
        success: false,
        message: "Title, content and userId are required",
      });
    }

    // Title validation
    if (title.length < 3 || title.length > 255) {
      return res.status(400).json({
        success: false,
        message: "Title must be between 3 and 255 characters",
      });
    }

    // Content validation
    if (content.length < 10) {
      return res.status(400).json({
        success: false,
        message: "Content must be at least 10 characters long",
      });
    }

    // is_published validation
    if (
      is_published !== undefined &&
      typeof is_published !== "boolean"
    ) {
      return res.status(400).json({
        success: false,
        message: "Published must be either true or false",
      });
    }

    // Check if user exists
    const user = await User.findByPk(userId);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    const post = await Post.create({
      title,
      content,
      is_published: is_published ?? false,
      userId,
    });

    return res.status(201).json({
      success: true,
      message: "Post created successfully",
      data: post,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to create post",
      error: error.message,
    });
  }
};

export const getSpecificPost = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await Post.findByPk(id);
    if (!post) return res.status(404).json({ message: "Post not found" });
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch post", error });
  }
};

export const updatePost = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, content, is_published, userId } = req.body;
    const post = await Post.findByPk(id);
    if (!post) return res.status(404).json({ message: "Post not found" });
    await post.update({ title, content, is_published, userId });
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ message: "Failed to update post", error });
  }
};

export const deletePost = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await Post.findByPk(id);
    if (!post) return res.status(404).json({ message: "Post not found" });
    await post.destroy();
    res.status(200).json({ message: "Post deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete post", error });
  }
};
