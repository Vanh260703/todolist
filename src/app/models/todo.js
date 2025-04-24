const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-updater');

const TodoSchema = new Schema(
    {
        content: { type: String, required: true },
        completed: { type: Boolean, default: false },
    },
    {
        timestamps: true,
    },
);

// Add plugin
// mongoose.plugin(slug);
// TodoSchema.plugin(mongooseDelete, { 
//     deletedAt: true,
//     overrideMethods: 'all', });

module.exports = mongoose.model('Todo', TodoSchema);