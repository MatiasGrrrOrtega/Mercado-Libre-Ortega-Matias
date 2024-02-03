class UserController {
  static renderRegister(req, res) {
    res.render('register')
  }

  static renderLogin(req, res) {
    res.render('login')
  }
}

module.exports = UserController
