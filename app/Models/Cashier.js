'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')
const Database = use('Database')

class Cashier extends Model {

    user () {
        return this.hasOne('App/Models/User')
    }

    cashMovement () {
        return this.hasMany('App/Models/CashMovement')
    }
    
    static get hidden(){
        return ["updated_at", "created_at", "user_id", "id"]
    }

}

module.exports = Cashier
