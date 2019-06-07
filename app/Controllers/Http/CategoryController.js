'use strict'
const Category = use('App/Models/Category')

class CategoryController {
  
  async index () {
    const categories = Category.all()
    return categories
  }

  async store ({ auth, request }) {
    const { id } = auth.user
    const data = request.only(['description'])
    const categories = await Category.create({...data, user_id: id})
    return categories
  }

  async show ({ params }) {
    const categories = await Category.findOrFail(params.id)
    return categories
  }

  async update ({ params, request, response }) {
  }

  async destroy ({ params}) {
    const categories = await Category.findOrFail(params.id)
    await categories.delete()
    return categories
  }

}
module.exports = CategoryController
