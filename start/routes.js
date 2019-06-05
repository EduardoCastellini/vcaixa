'use strict'

const Route = use('Route')

Route.post('/users', 'UserController.create')
Route.post('/sessions', 'SessionController.create')

Route.resource('Categorias', 'CategoryController')
  .apiOnly()
  .middleware('auth')

Route.resource('Caixa', 'CashierController')
  .apiOnly()
  .middleware('auth')

Route.resource('MovimentoCaixa', 'CashMovementController')
  .apiOnly()
  .middleware('auth')