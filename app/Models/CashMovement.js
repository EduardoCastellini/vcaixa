'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class CashMovement extends Model {

    static get hidden(){
        return ["cashier_id", "updated_at", ]
    }
}

module.exports = CashMovement
