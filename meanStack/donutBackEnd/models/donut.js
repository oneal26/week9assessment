var mongoose = require('mongoose')
var mongoosePaginate = require('mongoose-paginate')


var DonutSchema = new mongoose.Schema({
    dough: String,
    icing: String,
    sprinkles: String
})

DonutSchema.plugin(mongoosePaginate)
const Donut = mongoose.model('Donut', DonutSchema)

module.exports = Donut;