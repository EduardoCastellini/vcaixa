'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Cashier extends Model {

    cashMovement () {
        return this.hasMany('App/Models/CashMovement')
    }

    static get hidden(){
        return ["updated_at", "created_at", "user_id", "id", "description"]
    }
}

module.exports = Cashier
