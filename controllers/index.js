const Trail = require('../models/trail')
const Comment = require('../models/comment')

console.log('hello')

const getTrails = async (req, res) => {
  try {
    const trails = await Trail.find()
    return res.status(200).json(trails)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const findTrails = async (req, res) => {
  try {
    const { _id } = req.params
    const trail = await Trail.findOne({ _id: _id })
    if (!_id) {
      return res.status(404).send('Uh oh! Something went wrong.')
    }
    res.status(200).json(trail)
  } catch (error) {
    res.status(500).send(error.message)
  }
}

const findTrailByName = async (req, res) => {
  try {
    const { name } = req.params
    const trail = await Trail.findOne({ name: { $regex: '.*name.*' } })
    if (!_id) {
      return res.status(404).send('Uh oh! Something went wrong.')
    }
    res.status(200).json(trail)
  } catch (error) {
    res.status(500).send(error.message)
  }
}

const addTrail = async (req, res) => {
  try {
    const trail = await new Trail(req.body)
    await trail.save()
    return res.status(200).json({ trail })
  } catch (error) {
    res.status(500).send(error.message)
  }
}

const getAllComments = async (req, res) => {
  try {
    const trails = await Comment.find()
    return res.status(200).json(trails)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const createComment = async (req, res) => {
  const comment = await new Comment({
    trail_id: req.body.trail_id,
    rating: req.body.rating,
    conditions: req.body.conditions,
    comment: req.body.comment
  })
  comment.save()
  await Trail.updateOne(
    { _id: req.body.trail_id },
    {
      $push: {
        comments: comment
      }
    }
  )
  res.send(comment)
}

const createTrail = async (req, res) => {
  try {
    const trail = await new Trail(req.body)
    await trail.save()
    return res.status(200).json({ trail })
  } catch (error) {
    res.status(500).send(error.message)
  }
}

const deleteTrail = async (req, res) => {
  const { _id } = req.params
  await Trail.deleteOne({ _id: _id })
  res.send('deleted!')
}

const deleteComment = async (req, res) => {
  const _id = req.params._id
  await Comment.deleteOne({ _id: _id })
  const trailUpdate = await Trail.findByIdAndUpdate(req.params.trail_id, {
    $pull: {
      comments: req.params._id
    }
  })
  res.send({ trailUpdate })
}

module.exports = {
  getTrails,
  findTrails,
  addTrail,
  getAllComments,
  createComment,
  findTrailByName,
  createTrail,
  deleteTrail,
  deleteComment
}
