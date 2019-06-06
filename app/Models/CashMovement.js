'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')
const Database = use('Database')

class CashMovement extends Model {

    user () {
        return this.hasOne('App/Models/User')
    }

    cashier () {
        return this.hasOne('App/Models/Cashier')
    }

    static get hidden(){
        return ["cashier_id", "updated_at", ]
    }
}

module.exports = CashMovement
