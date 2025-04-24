const Todo = require('../models/todo');
const { mutipleMongooseToObject } = require('../../util/mongoose');

class HomePageController{
    // [GET] /
    home(req, res) {
        Todo.find({})
            .then((todos) => {
                res.render('home', {
                    todos: mutipleMongooseToObject(todos),
                });
            })
            .catch((err) => {
                console.error(err);
                res.status(500).send('Error retrieving todos');
            });
    }

    // [POST] /add
    add(req, res) {
        // const { content, completed } = req.body;
        // Here you can add logic to handle the data, like saving it to a database
       const todo = new Todo(req.body);
       todo
        .save()
        .then(() => {
            res.redirect('/');
        })
        .catch((err) => {
            console.error(err);
            res.status(500).send('Error saving todo');
        });

    }

    // [GET] /complete/:id
    completeTodo(req, res){
        const id = req.params.id;
        Todo.findById(id)
            .then((todo) => {
                // Đảo ngược trạng thái hoàn thành từ true thành false và ngược lại
                todo.completed = !todo.completed; // Toggle the completed status
                return todo.save();
            })
            .then(() => {
                res.redirect('/');
            })
            .catch((err) => {
                console.error(err);
                res.status(500).send('Error updating todo');
            });
    }

    // [GET] /delete/:id
    deleteTodo(req, res){
        const id = req.params.id;
        Todo.deleteOne({ _id: id })
            .then(() => {
                res.redirect('/');
            })
            .catch((err) => {
                console.error(err);
                res.status(500).send('Error deleting todo');
            });
    }
}

module.exports = new HomePageController();
