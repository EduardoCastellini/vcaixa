'use strict'
const CashMovement = use('App/Models/CashMovement')


class CashMovementController {

  async index ({ request, response, view }) {
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
  }


  async update ({ params, request, response }) {
  }


  async destroy ({ params, request, response }) {
  }
}

module.exports = CashMovementController
