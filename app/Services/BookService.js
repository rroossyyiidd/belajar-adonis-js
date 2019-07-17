'use strict';

const Book = use('App/Models/Book');
const BookService = {};

/**
 * @returns {Promise<*|Promise<[any, any, any, any, any, any]>|Promise<[any, any, any, any, any, any, any, any, any, any]>|Promise<[any, any, any, any, any, any, any, any, any]>|Promise<[any, any, any, any, any, any, any, any]>|never|Promise<[any, any, any, any, any, any, any]>|Promise<[any, any, any, any, any]>|Promise<[any, any, any, any]>|Promise<[any, any, any]>|Promise<[any, any]>|Promise<any[]>>}
 */
BookService.index = async () => {
  return await Book.all();
};

/**
 * @param {Number} id
 * @returns {Promise<number | never | bigint | Promise<*>>}
 */
BookService.show = async (id) => {
  return await Book.find(id);
};

/**
 * @param {Number} id
 * {
 *    title: 'nama buku',
 *    year: 2019,
 *    author: {
 *        name: 'author name'
 *    }
 * }
 */
BookService.detail = async (id) => {
  // with 'author' itu nama function dari Book model yg telah didefinisikan
  return await Book.query().with('author').where('id', id)
};

/**
 * @param {Number} id
 * @returns {Promise<Promise<*>|Promise<*>|*|void|Promise<void>|never|IDBRequest<IDBValidKey>>}
 */
BookService.update = async (id) => {
  return await Book.where('id', id).update(data)
};

/**
 * @param {Number} id
 * @returns {Promise<boolean | Promise<boolean> | void | IDBRequest<undefined>>}
 */
BookService.destroy = async (id) => {
  return await Book.where('id', id).delete();
};

module.exports = BookService;
