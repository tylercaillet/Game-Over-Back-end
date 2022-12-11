const router = require('express').Router()
const controller = require('../controller/GameController')
const middleware = require('../middleware')

router.get('/', controller.GetAllGames)

// // Create a new listing
router.post(
  '/new_game/user/:user_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.CreateGame
)

// // update a listing
router.put(
  '/:game_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.UpdateGame
)

// delete a listing
router.delete(
  '/:review_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.DeleteGame
)

router.get('/:id', controller.GetGameById)
module.exports = router
