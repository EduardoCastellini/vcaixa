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
    const data = request.only([ 'cashier_id','categories_id','type','value','description'])
    if (!await Database.table('cashiers').where({id:data.cashier_id}).where({user_id: id}).first()){
      return 'Erro, Caixa não liberado para este Usuario'
    }
    /**Grava Registro no BD */
    const cashMovement = await CashMovement.create({...data, user_id: id})
    /**Atualizando Saldo */
    const value = request.input('value')
    const cashier_id = request.input('cashier_id')
    const type = request.input('type')
    const  cashier = await Database.select('saldo').from('cashiers').where({id: cashier_id})
    var saldo = cashier[0]['saldo']
    if ((type == 'E') || (type == 'e')){
        saldo = saldo + value
    } if ((type == 'S') || (type == 's')) {
        saldo = saldo - value
    }
    if (!await Database.table('cashiers').where({id: cashier_id}).update('saldo',saldo)) {
      return 'Erro ao atualizar Saldo'
    }
    return cashMovement
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
