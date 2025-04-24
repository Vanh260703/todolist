const express = require('express');
const router = express.Router();

const homePageController = require('../app/controllers/HomePageController');

router.get('/', homePageController.home);
// POST /add
router.post('/add', homePageController.add);

router.get('/complete/:id', homePageController.completeTodo);   

router.get('/delete/:id', homePageController.deleteTodo);

module.exports = router;
