const data = require('../model/products.json')

class HomeController {
  static renderHome(req, res) {
    res.render('home', { products: data.products })
  }
}

module.exports = HomeController
