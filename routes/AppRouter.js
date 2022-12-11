const Router = require('express').Router()
const AuthRouter = require('./AuthRouter')
const GameRouter = require('./GameRouter')
const ReviewRouter = require('./ReviewRouter')
Router.use('/', AuthRouter)
Router.use('/games', GameRouter)
Router.use('/games/reivews', ReviewRouter)
module.exports = Router
