'use strict'

const Route = use('Route')

Route.post('/users', 'UserController.create')
Route.post('/sessions', 'SessionController.create')

Route.resource('categories', 'CategoryController')
  .apiOnly()
  .middleware('auth')

Route.resource('Movements', 'MovementController')
  .apiOnly()
  .middleware('auth')

Route.resource('Cashier', 'CashierController')
  .apiOnly()
  .middleware('auth')