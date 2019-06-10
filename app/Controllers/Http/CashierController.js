'use strict'
const Cashier = use('App/Models/Cashier')

class CashierController {

  async index ({auth}) {
    const { id } = auth.user
    const resCashier= await Cashier.query().where({user_id: id}).with('cashMovement').fetch()
    return resCashier

  }

  async store ({ auth, request}) {
    const { id } = auth.user
    const data = request.only(['description', 'saldo'])
    const cashier = await Cashier.create({...data, user_id: id})
    return cashier
  }

  async show ({ params, auth, response }) {
    const cashier = await Cashier.query().where({id: params.id}).with('cashMovement').first()
    if (cashier.user_id !== auth.user.id){
      return response.status(401).send({ error: 'Not authorized' })
    }
    return cashier
  }

  async destroy ({ params, auth, response }) {
    const cashier = await Cashier.findOrFail(params.id)
    if (cashier.user_id !== auth.user.id){
      return response.status(401).send({ error: 'Not authorized' })
    }
    await cashier.delete()
    return cashier.id
  }

}

module.exports = CashierController
