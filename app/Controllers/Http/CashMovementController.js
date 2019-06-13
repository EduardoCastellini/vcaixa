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
    await CashMovement.updatingBalance(data.cashier_id, data.value, data.type)

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

    if (cashMovement.user_id !== auth.user.id){
      return response.status(401).send({ error: 'Not authorized' })
    }

    await cashMovement.delete()

    if ((cashMovement.type == 'E') || (cashMovement.type == 'e')){
      var type = 'S'
    } else if ((cashMovement.type == 'S') || (cashMovement.type == 's')) {
      var type = 'E'
    }
    await CashMovement.updatingBalance(cashMovement.cashier_id, parseInt(cashMovement.value), type)
    
    return cashMovement.id
  }
}

module.exports = CashMovementController
