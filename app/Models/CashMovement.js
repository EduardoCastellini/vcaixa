'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')
const Cashier =use('./Cashier')
const Database = use('Database')

class CashMovement extends Model {

    user () {
        return this.hasOne('App/Models/User')
    }

    cashier () {
        return this.hasOne('App/Models/Cashier')
    }

    static get hidden(){
        return ["updated_at", "user_id", "cashier_id"]
    }

    static async updatingBalance(cashier_id, value, type){
        const cashier = await Cashier.findOrFail(cashier_id);

        if ((type == 'E') || (type == 'e')){
            cashier.saldo += value
        } if ((type == 'S') || (type == 's')) {
            cashier.saldo -= value
        }    

        if (! await cashier.save()){
            return 'Error updating saldo!'
        }
    }

}

module.exports = CashMovement
