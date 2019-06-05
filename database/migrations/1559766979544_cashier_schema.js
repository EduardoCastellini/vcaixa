'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CashierSchema extends Schema {
  up () {
    this.create('cashiers', (table) => {
      table.increments()
      table
        .integer('user_id')
        .unsigned()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.string('description')
      table.decimal('saldo').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('cashiers')
  }
}

module.exports = CashierSchema
