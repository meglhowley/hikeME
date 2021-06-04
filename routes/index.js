const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()

router.get('/', (req, res) => res.send('This is root!'))
router.get('/trails', controllers.getTrails)
router.post('/trails', controllers.addTrail)
router.get('/trails/search/:_id', controllers.findTrails)
router.get('/trails/comment/search/', controllers.getAllComments)
router.post('/trails/comment', controllers.createComment)
router.get('/trails/name/:name', controllers.findTrailByName)
router.post('/trails/create', controllers.createTrail)
router.delete('/trails/delete/:_id', controllers.deleteTrail)
router.delete('/trails/:trail_id/comments/:_id', controllers.deleteComment)

module.exports = router
