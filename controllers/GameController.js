const { Games } = require('../models')

const GetAllGames = async (req, req) => {
  try {
    const games = await Games.findAll({})
    res.send(games)
  } catch (error) {
    throw error
  }
}

const GetGameById = async (req, res) => {
  try {
    const games = await Games.findByPk(req.params.id)
    res.send(games)
  } catch (error) {
    throw error
  }
}

const CreateGame = async (req, res) => {
  try {
    let userId = parseInt(req.params.user_id)
    let gameBody = {
      userId,
      ...req.body
    }
    const createdGame = await Games.create(gameBody)
    res.send(createdGame)
  } catch (error) {
    throw error
  }
}

const UpdateGame = async (req, res) => {
  try {
    let gameId = parseInt(req.params.game_id)

    let updatedGame = await Games.update(req.body, {
      where: { id: gameId },
      returning: true
    })
    res.send(updatedGame)
  } catch (error) {
    throw error
  }
}

const DeleteGame = async (req, res) => {
  try {
    let gameId = parseInt(req.params.game_id)
    await Games.destroy({ where: { id: gameId } })
    res.send({ message: `Deleted game with an id of ${gameId}` })
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetAllGames,
  GetGameById,
  CreateGame,
  UpdateGame,
  DeleteGame
}
