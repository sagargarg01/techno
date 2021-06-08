const express = require('express')
const {
  create,
  getAllPosts,
  getPostById,
  update,
  deletePost,
} = require('../controllers/postController')
const router = express.Router()

console.log('router loaded')

router.post('/create', create)
router.get('/getall', getAllPosts)
router.get('/getpost', getPostById)
router.post('/update', update)
router.delete('/delete', deletePost)

module.exports = router
