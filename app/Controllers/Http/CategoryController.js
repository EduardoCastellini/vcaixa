'use strict'
const Category = use('App/Models/Category')

class CategoryController {
  
  async index ({ request, response, view }) {
    const categories = Category.all()
    return categories
  }

  async store ({ auth, request, response }) {
    const { id } = auth.user
    const data = request.only(['description'])
    const category = await Category.create({...data, user_id: id})
    return category
  }

  async show ({ params }) {
    const categories = await Category.findOrFail(params.id)
    return categories
  }

  async update ({ params, request, response }) {
  }

  async destroy ({ params, response }) {
    const categories = await Category.findOrFail(params.id)
    await categories.delete()
    return categories
  }

}

module.exports = CategoryController
