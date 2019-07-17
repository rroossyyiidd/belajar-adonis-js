'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class BookSchema extends Schema {
  // membuat tabel
  up() {
    // membuat tabel
    this.create('books', (table) => {
      // id
      table.increments();
      // kolom nama
      table.string('name');
      table.string('author');
      table.string('category');
      // create at
      table.timestamps()
    })
  }

  // drop table
  down() {
    this.drop('books')
  }
}

module.exports = BookSchema;
