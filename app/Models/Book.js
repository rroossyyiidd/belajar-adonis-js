'use strict';

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class Book extends Model {
  // untuk menyembunyikan kolom
  static get hidden() {
    return ['created_at', 'updated_at']
  }

  // relasi ke author, setiap buku memiliki satu author
  author() {
    return this.belongsTo('App/Models/Author')
  }
}

module.exports = Book;
