const Post = require('../models/postSchema')

module.exports.create = async (req, res) => {
  try {
    const post = await Post.create(req.body)
    return res.status(200).json({
      success: true,
      message: 'Created Successfully',
    })
  } catch (error) {
    console.log('error', error)
    return res.status(400).json({
      success: false,
    })
  }
}

module.exports.getAllPosts = async (req, res) => {
  try {
    const post = await Post.find({})
    return res.status(200).json({
      success: true,
      data: post,
    })
  } catch (error) {
    console.log('error', error)
    return res.status(400).json({
      success: false,
    })
  }
}

module.exports.getPostById = async (req, res) => {
  try {
    const post = await Post.findById(req.query.id)
    return res.status(200).json({
      success: true,
      data: post,
    })
  } catch (error) {
    console.log('error', error)
    return res.status(400).json({
      success: false,
    })
  }
}

module.exports.update = async (req, res) => {
  try {
    const post = await Post.findByIdAndUpdate(req.query.id, req.body, {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    })
    return res.status(200).json({
      success: true,
      data: post,
    })
  } catch (error) {
    console.log('error', error)
    return res.status(400).json({
      success: false,
    })
  }
}

module.exports.deletePost = async (req, res) => {
  try {
    const post = await Post.findByIdAndDelete(req.query.id)
    return res.status(200).json({
      success: true,
      message: 'Deleted Succesfully',
    })
  } catch (error) {
    console.log('error', error)
    return res.status(400).json({
      success: false,
    })
  }
}
