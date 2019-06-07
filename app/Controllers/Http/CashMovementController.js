'use strict'
const CashMovement = use('App/Models/CashMovement')
const Database = use('Database')
const Cashier = use('App/Models/Cashier')

class CashMovementController {

  async index () {
    const cashMovement = CashMovement.all()
    return cashMovement
  }

  async store ({ auth, request }) {
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
    const value = parseFloat(request.input('value'))
    const cashier_id = request.input('cashier_id')
    const type = request.input('type')
    var  cashier = await Database.select('saldo').from('cashiers').where({id: cashier_id} )
    var saldo = cashier[0]['saldo']
    if ((type == 'E') || (type == 'e')){
      var saldoUpdated = saldo + value
    } if ((type == 'S') || (type == 's')) {
      var saldoUpdated = saldo - value
    }
    const retorno = await Database.table('cashiers').where({id: cashier_id}).update('saldo',saldoUpdated)
  
    return retorno
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
