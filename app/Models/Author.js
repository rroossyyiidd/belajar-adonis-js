'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Author extends Model {
  // untuk menyembunyikan kolom
  static get hidden() {
    return ['created_at', 'updated_at']
  }

  // karena author berkemungkinan punya banyak buku maka books
  books() {
    return this.hasMany('App/Models/Book')
  }
}

module.exports = Author
