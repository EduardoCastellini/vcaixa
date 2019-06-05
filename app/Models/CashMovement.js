'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class CashMovement extends Model {
    user () {
        return this.belongsTo('App/Models/User')
    }

    Cashier () {
        return this.belongsTo('App/Models/Cashier')
    }

    category () {
        return this.belongsTo('App/Models/Category')
    }

}

module.exports = CashMovement
