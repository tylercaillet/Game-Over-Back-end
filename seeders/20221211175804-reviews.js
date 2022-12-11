'use strict'
const falso = require('@ngneat/falso')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const reviews = [...Array(20)].map((_) => {
      return {
        userId: falso.randNumber({ min: 1, max: 20 }),
        listingId: falso.randNumber({ min: 1, max: 20 }),
        comment: falso.randPhrase(),
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
