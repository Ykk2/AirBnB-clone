'use strict';

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    options.tableName = 'Spots'
    return queryInterface.bulkInsert(options, [
      {
        ownerId: 3,
        address: '111 ABC road',
        city: 'Los Angeles',
        state: 'CA',
        country: 'United States',
        lat: 11.123123,
        lng: -11.123123,
        name: 'Hidden Haven - 5 Bed Villa with pool & Sea Views',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        price: 100,
      },
      {
        ownerId: 3,
        address: '222 ABC road',
        city: 'San Jose',
        state: 'CA',
        country: 'United States',
        lat: 22.123123,
        lng: -22.123123,
        name: 'New Moon Cottage',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        price: 200,
      },
      {
        ownerId: 3,
        address: '333 ABC road',
        city: 'San Francisco',
        state: 'CA',
        country: 'United States',
        lat: 33.123123,
        lng: -33.123123,
        name: 'Zion Kolob Canyon-Farm Stay-cows, goats, alpaca',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
        price: 300,
      },
      {
        ownerId: 3,
        address: '444 ABC road',
        city: 'Fremont',
        state: 'CA',
        country: 'United States',
        lat: 1,
        lng: 1,
        name: 'Shackup Tower - 30 ft in the air & hot tub',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        price: 250,
      },
      {
        ownerId: 3,
        address: '555 ABC road',
        city: 'Fremont',
        state: 'CA',
        country:'United States',
        lat: 1,
        lng: 1,
        name: 'Scenic A-frame retreat, Hot Tub, Treehouse & more!',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        price: 200,
      },
      {
        ownerId: 3,
        address: '666 ABC road',
        city: 'Fremont',
        state: 'CA',
        country:'United States',
        lat: 1,
        lng: 1,
        name: 'JT luxury Villa exquisite design! luxury amenities',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        price: 220,
      },
      {
        ownerId: 3,
        address: '777 ABC road',
        city: 'Fremont',
        state: 'CA',
        country:'United States',
        lat: 1,
        lng: 1,
        name: 'Steps to Beach Family and Dog Friendly Sleeps 10',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        price: 150,
      },
      {
        ownerId: 3,
        address: '888 ABC road',
        city: 'Fremont',
        state: 'CA',
        country:'United States',
        lat: 1,
        lng: 1,
        name: 'Datviani -MANDO- Cottage in Zoological Park',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        price: 750,
      },
      {
        ownerId: 3,
        address: '999 ABC road',
        city: 'Fremont',
        state: 'CA',
        country:'United States',
        lat: 1,
        lng: 1,
        name: 'Knotty Barn | Cherry Log',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        price: 850,
      },
      {
        ownerId: 3,
        address: '1000 ABC road',
        city: 'Fremont',
        state: 'CA',
        country:'United States',
        lat: 1,
        lng: 1,
        name: 'Elements - Freycinet Holiday Houses',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        price: 650,
      },
      {
        ownerId: 3,
        address: '1111 ABC road',
        city: 'Fremont',
        state: 'CA',
        country:'United States',
        lat: 1,
        lng: 1,
        name: 'Country house minutes from the sea in Maitencillo CEC',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        price: 50,
      },
      {
        ownerId: 3,
        address: '2222 ABC road',
        city: 'Fremont',
        state: 'CA',
        country:'United States',
        lat: 1,
        lng: 1,
        name: 'New! Modern Smoky Mtn Getaway Cabin - Amazing View',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        price: 150,
      },
      {
        ownerId: 3,
        address: '3333 ABC road',
        city: 'Fremont',
        state: 'CA',
        country:'United States',
        lat: 1,
        lng: 1,
        name: 'Stunning 360 Views on 20 Acres-Near Bozeman & YNP!',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        price: 150,
      },
      {
        ownerId: 3,
        address: '4444 ABC road',
        city: 'Fremont',
        state: 'CA',
        country:'United States',
        lat: 1,
        lng: 1,
        name: 'Villa Salina - Barefoot luxury on Callala Beach',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        price: 170,
      },
      {
        ownerId: 3,
        address: '5555 ABC road',
        city: 'Fremont',
        state: 'CA',
        country:'United States',
        lat: 1,
        lng: 1,
        name: 'Perfect Couples/Family Cabin',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        price: 175,
      },
      {
        ownerId: 3,
        address: '6666 ABC road',
        city: 'Fremont',
        state: 'CA',
        country:'United States',
        lat: 1,
        lng: 1,
        name: 'The Sabino Canyon- No Bad Days Retreat',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        price: 280,
      }
    ])
  },

  async down (queryInterface, Sequelize) {
   options.tableName = 'Spots'
   return queryInterface.bulkDelete(options)
  }
};
