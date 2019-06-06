'use strict'
const CashMovement = use('App/Models/CashMovement')

class CashMovementController {

  async index ({ request, response, view }) {
    const cashMovement = CashMovement.all()
    return cashMovement
  }

  async store ({ auth, request, response }) {
    const { id } = auth.user
    const data = request.only([
      'cashier_id',
      'categories_id', 
      'type', 
      'value',
      'description'
    ])
    const cashMovement = await CashMovement.create({...data, user_id: id})
    return cashMovement
  }

  async show ({ params, request, response, view }) {
    const cashMovement = await CashMovement.findOrFail(params.id)
    return cashMovement
  }

  async destroy ({ params }) {
    const cashMovement = await CashMovement.findOrFail(params.id)
    await cashMovement.delete()
    return cashMovement
  }
}

module.exports = CashMovementController
