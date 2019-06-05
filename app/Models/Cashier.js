'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Cashier extends Model {
    user () {
        return this.belongsTo('App/Models/User')
    }

    cashmovement () {
        return this.hasMany('App/Models/CashMovement')
    }
}

module.exports = Cashier
