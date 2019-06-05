'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Category extends Model {
    user () {
        return this.belongsTo('App/Models/User')
    }

    cashmovement () {
        return this.hasMany('App/Models/Cashmovement')
    }
}

module.exports = Category
