'use strict'
const Cashier = use('App/Models/Cashier')

class CashierController {

  async index ({ params }) {
    const cashier = Cashier
    .query()
    .with('cashMovement')
    .first();
    return cashier
  }

  async store ({ auth, request}) {
    const { id } = auth.user
    const data = request.only(['description', 'saldo'])
    const cashier = await Cashier.create({...data, user_id: id})
    return cashier
  }

  async show ({ params }) {
    const cashier = await Cashier
    .query()
    .with('cashMovement')
    .where("id", params.id)
    .first();

    return cashier
  }

  async destroy ({ params }) {
    const cashier = await Cashier.findOrFail(params.id)
    await cashier.delete()
    return cashier
  }

}

module.exports = CashierController
