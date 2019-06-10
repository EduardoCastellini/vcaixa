'use strict'
const CashMovement = use('App/Models/CashMovement')
const Database = use('Database')

class CashMovementController {

  async index ({auth}) {
    const { id } = auth.user
    const cashMovement = CashMovement.query().where({user_id:id}).fetch();
    return cashMovement
  }

  async store ({ auth, request, response }) {
    const { id } = auth.user
    const data = request.only([ 'cashier_id','categories_id','type','value','description'])
    if (!await Database.table('cashiers').where({id:data.cashier_id}).where({user_id: id}).first()){
      return response.status(401).send({ error: 'Not authorized' })
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
  
  async show ({ params, auth }) {
    const cashMovement = await CashMovement.findOrFail(params.id)
    if (cashMovement.user_id !== auth.user.id){
      return response.status(401).send({ error: 'Not authorized' })
    }
    return cashMovement
  }

  async destroy ({ params, auth, response}) {
    const cashMovement = await CashMovement.findOrFail(params.id)
    if (cashMovement.user_id !== auth.user.id){
      return response.status(401).send({ error: 'Not authorized' })
    }
    await cashMovement.delete()
    return cashMovement.id
  }
}

module.exports = CashMovementController
