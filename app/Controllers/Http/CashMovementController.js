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
    if ((data.type !== 'E') && (data.type !== 'e') && (data.type !== 'S') && (data.type !== 's')){
      return response.status(401).send({ error: 'Type Invalid' })
    }
    const cashMovement = await CashMovement.create({...data, user_id: id})

    const value = request.input('value')
    const cashier_id = request.input('cashier_id')
    const type = request.input('type')
    CashMovement.updatingBalance(cashier_id, value, type)
    return cashMovement
  }
  
  async show ({ params, auth, response }) {
    const cashMovement = await CashMovement.findOrFail(params.id)
    if (cashMovement.user_id !== auth.user.id){
      return response.status(401).send({ error: 'Not authorized' })
    }
    return cashMovement
  }

  async destroy ({ params, auth, response}) {
    const cashMovement = await CashMovement.findOrFail(params.id)
    const cashier_id = cashMovement.cashier_id
    const movement = await Database.select('value').from('cash_movements').where({id: params.id})
    var value = parseInt(movement[0]['value'])
    var type = cashMovement.type

    if (cashMovement.user_id !== auth.user.id){
      return response.status(401).send({ error: 'Not authorized' })
    }
    await cashMovement.delete()

    if ((type == 'E') || (type == 'e')){
      type = 'S'
    } else if ((type == 'S') || (type == 's')) {
      type = 'E'
    }
    await CashMovement.updatingBalance(cashier_id, value, type)
    return cashMovement.id
  }
}

module.exports = CashMovementController
