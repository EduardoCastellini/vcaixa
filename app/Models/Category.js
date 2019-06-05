'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Category extends Model {
    user () {
        return this.belongsTo('App/Models/User')
    }

    movement () {
        return this.hasMany('App/Models/Movement')
      }
}

module.exports = Category
