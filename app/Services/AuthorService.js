'use strict';

const Auhtor = use('App/Model/Author');
const BookService = {};

/**
 * @returns {Promise<*|Promise<[any, any, any, any, any, any]>|Promise<[any, any, any, any, any, any, any, any, any, any]>|Promise<[any, any, any, any, any, any, any, any, any]>|Promise<[any, any, any, any, any, any, any, any]>|never|Promise<[any, any, any, any, any, any, any]>|Promise<[any, any, any, any, any]>|Promise<[any, any, any, any]>|Promise<[any, any, any]>|Promise<[any, any]>|Promise<any[]>>}
 */
BookService.index = async () => {
  return await Auhtor.all();
};

/**
 * @param {Number} id
 * @return {Promise<number | never | bigint | Promise<*>>}
 */
BookService.show = async (id) => {
  return await Auhtor.find(id);
};

/**
 * @param {Number} id
 */
BookService.detail = async (id) => {
  return await Book.query().with('books').where('id', id)
};

/**
 * @param {Number} id
 * @return {Promise<Promise<*>|Promise<*>|*|void|Promise<void>|never|IDBRequest<IDBValidKey>>}
 */
BookService.update = async (id) => {
  return await Auhtor.where('id', id).update(data)
};

/**
 * @param {Number} id
 * @return {Promise<boolean | Promise<boolean> | void | IDBRequest<undefined>>}
 */
BookService.destroy = async (id) => {
  return await Auhtor.where('id', id).delete();
};

module.exports = BookService;
