'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Category extends Model {

    user () {
        return this.hasOne('App/Models/User')
    }

    cashMovement () {
        return this.hasMany('App/Models/cashMovement')
    }

    static get hidden(){
        return ["created_at", "updated_at", "user_id" ]
    }

}

module.exports = Category
