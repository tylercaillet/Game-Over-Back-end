'use strict'
const falso = require('@ngneat/falso')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      'games',
      [
        {
          owner_id: falso.randNumber({ min: 1, max: 5 }),
          title: 'Call of Duty Modern Warfare 2',
          Image: 'https://imgur.com/aIe5a7o',
          rating: falso.randNumber({ min: 1, max: 10 }),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          owner_id: falso.randNumber({ min: 1, max: 5 }),
          title: 'God of War Ragnarok',
          Image: 'https://imgur.com/GTYbcBY',
          rating: falso.randNumber({ min: 1, max: 10 }),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          owner_id: falso.randNumber({ min: 1, max: 5 }),
          title: 'Elden Ring',
          Image: 'https://imgur.com/22Xmoc7',
          rating: falso.randNumber({ min: 1, max: 10 }),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          owner_id: falso.randNumber({ min: 1, max: 5 }),
          title: 'Horizon Forbidden West',
          Image: 'https://imgur.com/e5GmvFb',
          rating: falso.randNumber({ min: 1, max: 10 }),
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('games', null, {})
  }
}
