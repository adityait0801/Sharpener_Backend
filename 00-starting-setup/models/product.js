const db = require('../util/database')
const path = require('path');

module.exports = class Product {

  static fetchAll() {
    return db.execute('SELECT * FROM products');
  }
};
