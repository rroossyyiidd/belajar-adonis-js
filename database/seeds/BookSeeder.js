'use strict';

/*
|--------------------------------------------------------------------------
| BookSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory');
const Book = use('App/Models/Book');

class BookSeeder {
  async run () {
    const book = new Book();
    book.title = 'Adonis JS for dummies';
    book.year = '2018';
    book.author_id = 1;

    await book.save()
  }
}

module.exports = BookSeeder;
