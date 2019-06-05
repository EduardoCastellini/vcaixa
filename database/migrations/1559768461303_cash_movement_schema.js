'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CashMovementSchema extends Schema {
  up () {
    this.create('cash_movements', (table) => {
      table.increments()
      table
        .integer('user_id')
        .unsigned()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table
        .integer('cashier_id')
        .unsigned()
        .references('id')
        .inTable('cashiers')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table
        .integer('categories_id')
        .unsigned()
        .references('id')
        .inTable('categories')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.string('type').notNullable()
      table.decimal('value').notNullable()
      table.string('description').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('cash_movements')
  }
}

module.exports = CashMovementSchema
