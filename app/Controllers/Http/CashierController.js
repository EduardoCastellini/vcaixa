'use strict'
const Cashier = use('App/Models/Cashier')

class CashierController {

  async index ({ request, response, view }) {
    const cashier = Cashier.all()
    return cashier
  }


  async store ({ request, response }) {
  }


  async show ({ params, request, response, view }) {
  }


  async update ({ params, request, response }) {
  }


  async destroy ({ params, request, response }) {
  }
}

module.exports = CashierController
