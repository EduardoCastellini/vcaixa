'use strict'
const CashMovement = use('App/Models/CashMovement')
const Database = use('Database')

class CashMovementController {

  async index () {
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

    /**Ajustando Saldo */
    const value = request.only(['value'])
    const type = request.only(['type'])
    const saldo = await Database
      .select('saldo')
      .from('cashiers')
      .where({id: 1} )

    const saldoA = saldo + value

    return saldoA
  }
  






  



  async show ({ params }) {
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
