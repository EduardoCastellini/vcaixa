'use strict'
const Cashier = use('App/Models/Cashier')

class CashierController {

  async index ({ request, response, view }) {
    const cashier = Cashier.all()
    return cashier
  }

  async store ({ auth, request, response }) {
    const { id } = auth.user
    const data = request.only(['description', 'saldo'])
    const cashier = await Cashier.create({...data, user_id: id})
    return cashier
  }

  async show ({ params }) {
    const cashier = await Cashier.findOrFail(params.id)
    return cashier
  }

  async update ({ params, request, response }) {
  }

  async destroy ({ params, response }) {
    const cashier = await Cashier.findOrFail(params.id)
    await cashier.delete()
    return cashier
  }

}

module.exports = CashierController
