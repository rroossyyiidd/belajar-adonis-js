'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class BookSchema extends Schema {
  // membuat tabel, dijalankan ketika adonis migration:run
  up() {
    // membuat tabel
    this.create('books', (table) => {
      // id
      table.increments();
      // kolom nama
      table.string('title');
      table.string('year');
      // foreign key to author
      // table.integer('author_id').unsigned();
      // table.integer('author_id').references('Author.id'); // Author itu nama model dari app\Model\Author
      // create at
      table.timestamps()
    })
  }

  // drop table, dijalankan ketika adonis migration:rollback
  down() {
    this.drop('books')
  }
}

module.exports = BookSchema;
