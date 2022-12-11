const router = require('express').Router()
const controller = require('../controller/ReviewController')
const middleware = require('../middleware')

router.get('/', controller.GetAllComments)

// // Create a new comment
router.post(
  '/new_review/user/:user_id/games/:games_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.CreateReview
)

// // update a comment
router.put(
  '/:review_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.UpdateReview
)

// delete a comment
router.delete(
  '/:review_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.DeleteReview
)

router.get('/:id', controller.GetReviewById)
module.exports = router
