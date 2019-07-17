'use strict';

/*
|--------------------------------------------------------------------------
| AuthorSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory');
const Author = use('App/Models/Author');

class AuthorSeeder {
  async run () {
    const author = new Author();

    author.name = 'Romli';
    author.birth_date = '1990-09-09';

    await author.save();
  }
}

module.exports = AuthorSeeder;
