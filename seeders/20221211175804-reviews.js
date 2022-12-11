'use strict'
const falso = require('@ngneat/falso')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const reviews = [...Array(20)].map((_) => {
      return {
        owner_id: falso.randNumber({ min: 1, max: 20 }),
        game_id: falso.randNumber({ min: 1, max: 20 }),
        review: falso.randPhrase(),
        createdAt: new Date(),
        updatedAt: new Date()
      }
    })
    await queryInterface.bulkInsert('reviews', reviews)
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('reviews')
  }
}
