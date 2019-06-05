'use strict'
const Movement = use('App/Models/Movement')

class MovementController {
 
  async index ({ }) {
    const Movements = Movement.all()
    return Movements
  }


  async store ({ request, response }) {
  }


  async show ({ params, request, response, view }) {
  }

 
  async update ({ params, request, response }) {
  }


  async destroy ({ params, request, response }) {
  }
}

module.exports = MovementController
