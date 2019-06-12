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
        const  cashier = await Database.select('saldo').from('cashiers').where({id: cashier_id})
        var saldo = cashier[0]['saldo']
        
        if ((type == 'E') || (type == 'e')){
            saldo = saldo += value
        } if ((type == 'S') || (type == 's')) {
            saldo = saldo -= value
        }    
        
        if (!await Database.table('cashiers').where({id: cashier_id}).update('saldo',saldo)) {
            return 'Error updating saldo!'
        }
        
    }

}

module.exports = CashMovement
